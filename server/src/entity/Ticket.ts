import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum Type {
  PROBLEM = 'problem',
  TASK = 'task',
  QUESTION = 'question',
  INCIDENT = 'incident',
}

export enum Priority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  URGENT = 'urgent'
}

export enum Status {
  PENDING = 'pending',
  OPEN = 'open',
  CLOSED = 'closed',
  SOLVED = 'solved',
  HOLD = 'hold'
}

export enum Via {
  VOICE = 'voice',
  CHAT = 'chat',
  WEB = 'web'
}

@Entity()
export class Ticket extends BaseEntity {
  @Column()
  _id: string;

  @Column({ nullable: true })
  url: string;

  @Column()
  external_id: string;

  @Column()
  created_at: string;

  @Column({ nullable: true })
  type: Type;

  @Column()
  subject: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  priority: Priority;

  @Column()
  status: Status;

  @Column({ nullable: true })
  submitter_id: number;

  @Column({ nullable: true })
  assignee_id: number;

  @Column({ nullable: true })
  organization_id: number;

  @Column('simple-array')
  tags: string[];

  @Column()
  has_incidents: boolean;

  @Column({ nullable: true })
  due_at: string;

  @Column()
  via: Via;
}

export enum ETicketFields {
  _ID = '_id',
  URL = 'url',
  EXTERNAL_ID = 'external_id',
  CREATED_AT = 'created_at',
  TYPE = 'type',
  SUBJECT = 'subject',
  DESCRIPTION = 'description',
  PRIORITY = 'priority',
  STATUS = 'status',
  RECIPIENT = 'recipient',
  SUBMITTER_ID = 'submitter_id',
  ASSIGNEE_ID = 'assignee_id',
  ORGANIZATION_ID = 'organization_id',
  TAGS = 'tags',
  HAS_INCIDENTS = 'has_incidents',
  DUE_AT = 'due_at',
  VIA = 'via',
  REQUESTER_ID = 'requester_id'
}
