import { Column, Entity, ManyToOne } from 'typeorm';
import { Building } from './building.entity';
import { User } from '../src/user/user.entity';
import { BaseEntity } from './base-entity';

@Entity()
export class Approval extends BaseEntity {
  @Column()
  buildingId: number;

  @ManyToOne(() => Building, (building) => building.approvals)
  building: Building;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.approvals)
  user: User;
}
