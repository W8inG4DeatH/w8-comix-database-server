import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class Comix extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  comixTitle: string;

  @Column({ type: 'varchar', nullable: true })
  seriesTitle?: string;

  @Column({ type: 'varchar', nullable: true })
  seriesSubtitle?: string;

  @Column({ type: 'varchar', nullable: true })
  displayName?: string;

  @Column({ type: 'varchar', nullable: true })
  author?: string;

  @Column({ type: 'varchar', nullable: true })
  publisher?: string;

  @Column({ type: 'int', nullable: true })
  publishmentYear?: number;

  @Column({ type: 'int', nullable: true })
  numberOfPages?: number;

  @Column({ type: 'varchar', nullable: true })
  coverUrlLink?: string;

  @Column({ type: 'boolean', nullable: true })
  coverHard?: boolean;

  @Column({ type: 'int', nullable: true })
  rating?: number;

  @Column({ type: 'boolean', nullable: true })
  collected?: boolean;

  @ManyToOne(() => User, (user: User) => user.comixes)
  user: User;
}
