import { Repository } from 'typeorm';
import { User } from './user.entity';

export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | undefined> {
    return await this.findOne({ where: { email } });
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return await this.findOne({ where: { username } });
  }
}
