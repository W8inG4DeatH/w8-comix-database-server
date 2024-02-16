import { EntityRepository, Repository } from 'typeorm';
import { Comix } from './comix.entity';

@EntityRepository(Comix)
export class ComixRepository extends Repository<Comix> {}
