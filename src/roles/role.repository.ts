import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleRepository extends Repository<Role> {}
