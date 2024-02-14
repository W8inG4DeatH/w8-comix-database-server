import { Injectable, NotFoundException } from '@nestjs/common';
import { Comix } from './Comix';
import { CreateComixDTO } from './dto/create-comix.dto';
import { UpdateComixDTO } from './dto/update-comix.dto';

@Injectable()
export class ComixesService {
  createOne(comix: CreateComixDTO): Promise<Comix> {
    const newComix: Comix = new Comix();
    Object.assign(newComix, comix);
    return newComix.save();
  }

  readAll(): Promise<Comix[]> {
    return Comix.find();
  }

  async getOneById(comixId: number): Promise<Comix> {
    const comix: Comix = await Comix.findOne({ where: { id: comixId } });
    if (!comix) {
      throw new NotFoundException(`Comix id ${comixId} not found`);
    }
    return comix;
  }

  async updateOne(comix: UpdateComixDTO): Promise<Comix> {
    const comixToUpdate = await this.getOneById(comix.id);
    Object.assign(comixToUpdate, comix);
    return comixToUpdate.save();
  }

  async deleteOne(comixId: number): Promise<Comix> {
    const comixToDelete = await this.getOneById(comixId);
    return comixToDelete.remove();
  }
}
