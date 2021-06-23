import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LocalAuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByUsername(username);

    if (!user.userId) {
      return null;
    }
    const isPasswordMatch = await this.userService.compare(pass, user.password);
    if (isPasswordMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
