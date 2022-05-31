import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from './user'

@Entity()
export class ApiKey {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User

  @Column('text')
  name!: string

  @Column('text')
  key!: string

  @Column('text', { array: true })
  scopes?: string[]

  @CreateDateColumn()
  createdAt!: Date

  @Column('timestamp')
  expiresAt!: Date

  @Column('timestamp', { nullable: true })
  usedAt!: Date | null
}
