import { BaseEntity } from 'entities/base-entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Region extends BaseEntity {
  @Column({ unique: true })
  name: string;
}
