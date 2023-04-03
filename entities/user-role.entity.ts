import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from './role.entity';
import { User } from '../src/user/user.entity';
import { BaseEntity } from './base-entity';

@Entity()
export class UserRole extends BaseEntity {
  @ManyToOne(() => User, (user) => user.userRoles)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Role, (role) => role.userRoles)
  @JoinColumn({ name: 'role_id' })
  role: Role;
}
