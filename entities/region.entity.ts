import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base-entity';

@Entity()
export class Region extends BaseEntity {
  @Column({ unique: true })
  name: string;
}
