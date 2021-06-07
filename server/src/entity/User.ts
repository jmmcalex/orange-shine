import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Organization } from './Organization';

export enum UserRole {
  ADMIN = 'admin',
  AGENT = 'agent',
  END_USER = 'end-user'
}

@Entity()
export class User extends BaseEntity {
  @Column('int')
  _id: number;

  @Column({ nullable: true })
  url: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  alias: string;

  @Column()
  created_at: string;

  @Column({ nullable: true })
  active: boolean;

  @Column({ nullable: true })
  verified: boolean;

  @Column({ nullable: true })
  shared: boolean;

  @Column({ nullable: true })
  locale: string;

  @Column({ nullable: true })
  timezone: string;

  @Column()
  last_login_at: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  signature: string;

  @Column({ nullable: true })
  organization_id: number;

  // @ManyToOne(() => Organization, Organization => Organization._id)
  // organization: Organization;

  @Column('simple-array')
  tags: string[];

  @Column({ nullable: true })
  suspended: true

  @Column()
  role: UserRole
}

export enum EUserFields {
  _ID = '_id',
  URL = 'url',
  EXTERNAL_ID = 'external_id',
  NAME = 'name',
  ALIAS = 'alias',
  CREATED_AT = 'created_at',
  ACTIVE = 'active',
  VERIFIED = 'verified',
  SHARED = 'shared',
  LOCALE = 'locale',
  TIMEZONE = 'timezone',
  LAST_LOGIN_AT = 'last_login_at',
  EMAIL = 'email',
  PHONE = 'phone',
  SIGNATURE = 'signature',
  ORGANIZATION_ID = 'organization_id',
  TAGS = 'tags',
  SUSPENDED = 'suspended',
  ROLE = 'role'
}
