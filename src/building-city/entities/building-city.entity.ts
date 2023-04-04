import { Entity, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { Building } from 'src/building/entities/building.entity';
import { City } from 'src/city/entities/city.entity';
import { BaseEntity } from 'entities/base-entity';

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
