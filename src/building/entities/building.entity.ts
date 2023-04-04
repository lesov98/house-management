import { Approval } from 'src/approval/entities/approval.entity';
import { BuildingCity } from 'src/building-city/entities/building-city.entity';
import { BuildingCooperator } from 'src/building-cooperator/entities/building-cooperator.entity';
import { Message } from 'src/message/entities/message.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'entities/base-entity';

@Entity()
export class Building extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  address: string;

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
