import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { RoleRepository } from 'src/roles/role.repository';
import { Role } from 'src/roles/entities/role.entity';
import { UserRoleRepository } from 'src/user-role/user-role.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserRepository,
      Role,
      RoleRepository,
      UserRoleRepository,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRoleRepository],
  exports: [UserService, UserRoleRepository, UserRoleRepository],
})
export class UserModule {}
