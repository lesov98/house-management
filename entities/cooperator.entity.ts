import { Entity, Column, OneToMany } from 'typeorm';
import { BuildingCooperator } from './building-cooperator.entity';
import { BaseEntity } from './base-entity';

@Entity()
export class Cooperator extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @OneToMany(
    () => BuildingCooperator,
    (buildingCooperator) => buildingCooperator.cooperator,
  )
  buildingCooperators: BuildingCooperator[];
}
