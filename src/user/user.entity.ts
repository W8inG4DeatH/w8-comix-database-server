import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Comix } from 'src/comix/comix.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  login: string;

  @Column({ type: 'varchar' })
  password: string;

  @OneToMany(() => Comix, (comix) => comix.user, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  comixes?: Comix[];
}
