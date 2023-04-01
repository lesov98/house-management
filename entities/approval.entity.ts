import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Building } from './building.entity';
import { User } from '../src/user/user.entity';

@Entity()
export class Approval {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  buildingId: number;

  @ManyToOne(() => Building, (building) => building.approvals)
  building: Building;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.approvals)
  user: User;
}
