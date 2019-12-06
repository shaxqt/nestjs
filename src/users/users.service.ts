import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: '1',
        username: 'philip',
        password: 'yo123',
      },
      {
        userId: '2',
        username: 'test',
        password: 'changeme',
      },
    ];
  }

  async findOne(username: String): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
