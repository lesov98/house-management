import { Region } from 'src/region/entities/region.entity';
import { Entity, Index, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from 'entities/base-entity';

@Entity()
@Index(['name', 'region'], { unique: true })
export class City extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Region, { onDelete: 'CASCADE' })
  region: Region;
}
