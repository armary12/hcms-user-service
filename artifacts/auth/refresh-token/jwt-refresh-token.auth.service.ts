import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JWTRefreshTokenAuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async refreshToken(userPayload: any) {
    if ((await this.cacheManager.get(userPayload.userId)) === 'logout') {
      throw new UnauthorizedException();
    }

    const user = await this.userService.getUserById(userPayload.userId);
    const { password, ...result } = user;

    const payload = {
      username: user.username,
      userId: userPayload.userId,
      token_type: 'public',
    };

    return {
      user: result,
      access_token: this.jwtService.sign(payload),
      // refresh_token: this.jwtService.sign({ message: 'auth' }),
    };
  }
}
