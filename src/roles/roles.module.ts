import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RoleRepository } from './role.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { RolesSeeder } from 'seeders/RolesSeeder';

@Module({
  imports: [TypeOrmModule.forFeature([Role, RoleRepository])],
  controllers: [RolesController],
  providers: [RolesService, RoleRepository, RolesSeeder],
  exports: [RoleRepository],
})
export class RolesModule {}
