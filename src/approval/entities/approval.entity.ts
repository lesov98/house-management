import { BaseEntity } from 'entities/base-entity';
import { Building } from 'src/building/entities/building.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

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
