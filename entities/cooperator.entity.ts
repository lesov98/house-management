import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BuildingCooperator } from './building-cooperator.entity';

@Entity()
export class Cooperator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

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

  @OneToMany(
    () => BuildingCooperator,
    (buildingCooperator) => buildingCooperator.cooperator,
  )
  buildingCooperators: BuildingCooperator[];
}
