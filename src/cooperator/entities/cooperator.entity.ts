import { BuildingCooperator } from 'src/building-cooperator/entities/building-cooperator.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'entities/base-entity';

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
