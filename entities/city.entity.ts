import { Entity, Index, Column, ManyToOne } from 'typeorm';
import { Region } from './region.entity';
import { BaseEntity } from './base-entity';

@Entity()
@Index(['name', 'region'], { unique: true })
export class City extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Region, { onDelete: 'CASCADE' })
  region: Region;
}
