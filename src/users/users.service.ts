import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: '1',
        name: 'philip',
        passwort: 'yo123',
      },
    ];
  }

  async findOne(username: String): Promise<User | undefined> {
    return this.users.find(user => user.name === username);
  }
}
