import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserRole } from './entities/user-role.entity';

@Injectable()
export class UserRoleRepository extends Repository<UserRole> {}
