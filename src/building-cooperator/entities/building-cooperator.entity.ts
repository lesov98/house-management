import { Building } from 'src/building/entities/building.entity';
import { Cooperator } from 'src/cooperator/entities/cooperator.entity';
import { Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseEntity } from 'entities/base-entity';

@Entity()
@Unique(['building', 'cooperator'])
export class BuildingCooperator extends BaseEntity {
  @ManyToOne(() => Building, { onDelete: 'CASCADE' })
  @JoinColumn()
  building: Building;

  @ManyToOne(() => Cooperator, { onDelete: 'CASCADE' })
  @JoinColumn()
  cooperator: Cooperator;
}
