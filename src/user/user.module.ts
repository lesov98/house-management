import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Module({
  providers: [
    UserService,
    { provide: getRepositoryToken(User), useClass: UserRepository },
  ],
  controllers: [UserController],
})
export class UserModule {}
