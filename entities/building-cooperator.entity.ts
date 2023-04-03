import { Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { Building } from './building.entity';
import { Cooperator } from './cooperator.entity';

@Entity()
@Unique(['building', 'cooperator'])
export class BuildingCooperator {
  @ManyToOne(() => Building, { onDelete: 'CASCADE' })
  @JoinColumn()
  building: Building;

  @ManyToOne(() => Cooperator, { onDelete: 'CASCADE' })
  @JoinColumn()
  cooperator: Cooperator;
}
