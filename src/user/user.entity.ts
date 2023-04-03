import { Entity, Column, OneToMany, BeforeInsert } from 'typeorm';
import { UserRole } from '../../entities/user-role.entity';
import { Approval } from '../../entities/approval.entity';
import { Message } from '../message/message.entity';
import * as bcrypt from 'bcrypt';
import { BaseEntity } from 'entities/base-entity';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles: UserRole[];

  @OneToMany(() => Approval, (approval) => approval.user)
  approvals: Approval[];

  @OneToMany(() => Message, (message) => message.receiver)
  receivedMessages: Message[];

  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[];

  @BeforeInsert()
  async hashPassword() {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  comparePassword(password: string): boolean {
    return bcrypt.compare(password, this.password);
  }
}
