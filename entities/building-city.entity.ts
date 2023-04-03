import { Entity, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { Building } from './building.entity';
import { City } from './city.entity';
import { BaseEntity } from './base-entity';

@Entity()
@Unique(['building', 'city'])
export class BuildingCity extends BaseEntity {
  @ManyToOne(() => Building, { onDelete: 'CASCADE' })
  @JoinColumn()
  building: Building;

  @ManyToOne(() => City, { onDelete: 'CASCADE' })
  @JoinColumn()
  city: City;
}
