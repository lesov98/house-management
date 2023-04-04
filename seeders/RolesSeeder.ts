import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seeder } from 'nestjs-seeder';
import { Role } from 'src/roles/entities/role.entity';
import { roles } from 'src/roles/entities/role-values';
import { RoleMapper } from 'src/roles/helper/role-mapper';

@Injectable()
export class RolesSeeder implements Seeder {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async seed(): Promise<any> {
    for (const roleName of roles) {
      const role = await this.roleRepository.findOne({
        where: { name: roleName },
      });

      if (!role) {
        const savedRole = await this.roleRepository.save({ name: roleName });
        RoleMapper.getInstance().addRole(savedRole.name, savedRole);
        continue;
      }
      RoleMapper.getInstance().addRole(role.name, role);
    }
  }

  async drop(): Promise<any> {
    await this.roleRepository.createQueryBuilder().delete().execute();
  }
}
