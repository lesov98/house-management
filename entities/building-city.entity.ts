import {
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Building } from './building.entity';
import { City } from './city.entity';

@Entity()
@Unique(['building', 'city'])
export class BuildingCity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Building, { onDelete: 'CASCADE' })
  @JoinColumn()
  building: Building;

  @ManyToOne(() => City, { onDelete: 'CASCADE' })
  @JoinColumn()
  city: City;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
