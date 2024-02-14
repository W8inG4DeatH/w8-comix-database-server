import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Comix extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  seriesTitle?: string;

  @Column({ type: 'varchar' })
  seriesSubtitle?: string;

  @Column({ type: 'varchar' })
  comixTitle: string;

  @Column({ type: 'varchar' })
  displayName?: string;

  @Column({ type: 'varchar' })
  author?: string;

  @Column({ type: 'varchar' })
  publisher?: string;

  @Column({ type: 'int' })
  publishmentYear?: number;

  @Column({ type: 'int' })
  numberOfPages?: number;

  @Column({ type: 'boolean' })
  coverHard?: boolean;

  @Column({ type: 'int' })
  rating?: number;

  @Column({ type: 'boolean' })
  collected?: boolean;
}
