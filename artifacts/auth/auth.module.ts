import { CacheModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { LocalAuthService } from './local/local.auth.service';
import { LocalStrategy } from './local/local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JWTAuthService } from './jwt/jwt.auth.service';
import { JWTStrategy } from './jwt/jwt.strategy';
import { AuthController } from './auth.controller';
import { JWTAuthGuard } from './jwt/jwt.auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { PublicSignatureAuthGuard } from './public-signature/public-signature.auth.guard';
import { JWTRefreshTokenAuthService } from './refresh-token/jwt-refresh-token.auth.service';
import { JWTRefreshTokenStrategy } from './refresh-token/jwt-refresh-token.strategy';

@Module({
  imports: [
    UserModule,
    // ConfigModule,
    CacheModule.register({
      ttl: null,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [
    LocalAuthService,
    JWTAuthService,
    JWTRefreshTokenAuthService,
    LocalStrategy,
    JWTStrategy,
    JWTRefreshTokenStrategy,
    PublicSignatureAuthGuard,
    {
      provide: APP_GUARD,
      useClass: JWTAuthGuard,
    },
  ],
  exports: [JWTAuthService],
})
export class AuthModule {}
