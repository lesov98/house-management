import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BuildingCity } from './building-city.entity';
import { BuildingCooperator } from './building-cooperator.entity';
import { Approval } from './approval.entity';
import { Message } from '../src/message/message.entity';

@Entity()
export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  address: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => BuildingCity, (buildingCity) => buildingCity.building)
  buildingCities: BuildingCity[];

  @OneToMany(() => Approval, (approval) => approval.building)
  approvals: Approval[];

  @OneToMany(() => Message, (message) => message.building)
  messages: Message[];

  @OneToMany(
    () => BuildingCooperator,
    (buildingCooperator) => buildingCooperator.building,
  )
  buildingCooperators: BuildingCooperator[];
}
