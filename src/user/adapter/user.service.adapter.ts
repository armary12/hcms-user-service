import * as bcrypt from 'bcrypt';

export class UserServiceAdapter {
  private saltRounds = 10;

  encryptPassword(password: string) {
    return bcrypt.hash(password, this.saltRounds);
  }

  compare(password: string, dbPassword: string) {
    return bcrypt.compare(password, dbPassword);
  }
}
