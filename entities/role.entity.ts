import { Entity, Column, OneToMany } from 'typeorm';
import { UserRole } from './user-role.entity';
import { BaseEntity } from './base-entity';

@Entity()
export class Role extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles: UserRole[];
}
