import { UserRole } from 'src/user-role/entities/user-role.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'entities/base-entity';

@Entity()
export class Role extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles: UserRole[];
}
