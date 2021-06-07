import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Organization extends BaseEntity {
  @Column()
  _id: number;

  @Column()
  url: string;

  @Column()
  external_id: string;

  @Column()
  name: string;

  @Column('simple-array')
  domain_names: string[];

  @Column()
  created_at: string;

  @Column()
  details: string;

  @Column()
  shared_tickets: boolean;

  @Column('simple-array')
  tags: string[];
}

export enum EOrganizationFields {
  _ID = '_id',
  URL = 'url',
  EXTERNAL_ID = 'external_id',
  NAME = 'name',
  DOMAIN_NAMES = 'domain_names',
  CREATED_AT = 'created_at',
  DETAILS = 'details',
  SHARED_TICKETS = 'shared_tickets',
  TAGS = 'tags'
}
