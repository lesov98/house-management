import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user-dto';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { RoleRepository } from 'src/roles/role.repository';
import { RoleMapper } from 'src/roles/helper/role-mapper';
import { GUEST_ROLE } from 'src/roles/entities/role-values';
import { UserRoleRepository } from 'src/user-role/user-role.repository';
import { Transactional } from 'typeorm-transactional-cls-hooked';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
    @InjectRepository(Role)
    private readonly roleRepository: RoleRepository,
    @InjectRepository(Role)
    private readonly userRoleRepository: UserRoleRepository,
  ) {}

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  @Transactional()
  async create(createUserDto: CreateUserDTO | User): Promise<User> {
    const user = this.userRepository.create(createUserDto);

    const role = RoleMapper.getInstance().getRole(GUEST_ROLE);
    const userRole = this.userRoleRepository.create({ user, role });

    await this.userRoleRepository.save(userRole);
    return this.userRepository.save(user);
  }
}
