import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JWTAuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async login(userPayload: any, rememberMe: boolean, expiresIn: string) {
    const payload = {
      username: userPayload.username,
      userId: userPayload.id,
      token_type: 'public',
    };
    const user = await this.userService.getUserByUsername(userPayload.username);
    const { password, ...result } = user;

    const expiresInJWT = {};

    if (expiresIn) {
      expiresInJWT['expiresIn'] = expiresIn;
    }
    if (!rememberMe) {
      return {
        user: result,
        access_token: this.jwtService.sign(payload, expiresInJWT),
      };
    }

    await this.cacheManager.del(userPayload.id);

    return {
      user: result,
      access_token: this.jwtService.sign(payload, expiresInJWT),
      refresh_token: this.jwtService.sign(
        {
          userId: user.userId,
          token_type: 'refresh',
        },
        { secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET') },
      ),
    };
  }

  async logout(userPayload: any): Promise<string> {
    await this.cacheManager.set(userPayload.userId, 'logout', { ttl: null });
    return '';
  }
}
