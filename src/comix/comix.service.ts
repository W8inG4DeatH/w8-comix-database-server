import { Injectable, NotFoundException } from '@nestjs/common';
import { Comix } from './comix.entity';
import { CreateComixDTO } from './dto/create-comix.dto';
import { UpdateComixDTO } from './dto/update-comix.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ComixService {
  constructor(
    @InjectRepository(Comix) private comixRepository: Repository<Comix>, // comixRepository indicates database operations
  ) {}

  createOne(comix: CreateComixDTO): Promise<Comix> {
    return this.comixRepository.save(comix);
  }

  readAll(): Promise<Comix[]> {
    return this.comixRepository.find();
  }

  async getOneById(comixId: number): Promise<Comix> {
    const comix: Comix = await Comix.findOne({ where: { id: comixId } });
    if (!comix) {
      throw new NotFoundException(`Comix id ${comixId} not found`);
    }
    return comix;
  }

  async updateOne(comix: UpdateComixDTO) {
    await this.getOneById(comix.id);
    return this.comixRepository.update(comix.id, comix);
  }

  async deleteOne(comixId: number): Promise<Comix> {
    const comixToDelete = await this.getOneById(comixId);
    return this.comixRepository.remove(comixToDelete);
  }
}
