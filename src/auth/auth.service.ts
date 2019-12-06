import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: String, passwort: String): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.passwort === passwort) {
      const { passwort, ...result } = user;
      return result;
    }
    return null;
  }
}
