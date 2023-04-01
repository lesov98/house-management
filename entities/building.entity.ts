import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BuildingCity } from './building-city.entity';
import { BuildingCooperator } from './building-cooperator.entity';

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

  @OneToMany(
    () => BuildingCooperator,
    (buildingCooperator) => buildingCooperator.building,
  )
  buildingCooperators: BuildingCooperator[];
}
