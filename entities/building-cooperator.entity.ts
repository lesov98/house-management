import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Building } from './building.entity';
import { Cooperator } from './cooperator.entity';

@Entity()
@Unique(['building', 'cooperator'])
export class BuildingCooperator {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Building, { onDelete: 'CASCADE' })
  @JoinColumn()
  building: Building;

  @ManyToOne(() => Cooperator, { onDelete: 'CASCADE' })
  @JoinColumn()
  cooperator: Cooperator;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
