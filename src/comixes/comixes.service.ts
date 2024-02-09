import { Injectable, NotFoundException } from '@nestjs/common';
import { Comix } from './Comix';
import { CreateComixDTO } from './dto/create-comix.dto';
import { UpdateComixDTO } from './dto/update-comix.dto';

@Injectable()
export class ComixesService {
  private trackId = 1;
  private comixes: Comix[] = [];

  createOne(comix: CreateComixDTO): Comix {
    const newComix: Comix = {
      id: this.trackId++,
      comixTitle: comix.ComixTitle,
      ...comix,
    };
    this.comixes.push(newComix);
    return newComix;
  }

  readAll(): readonly Comix[] {
    return this.comixes;
  }

  getOneById(comixId: number): Comix {
    const comix: Comix = this.comixes.find(
      (c: Comix) => c.id === Number(comix.id),
    );
    if (!comix) {
      throw new NotFoundException(`Comix id ${comixId} not found`);
    }
    return comix;
  }

  updateOne(comix: UpdateComixDTO): Comix {
    const comixToUpdate = this.getOneById(comix.Id);
    Object.assign(comixToUpdate, comix);
    return comixToUpdate;
  }

  deleteOne(comixId: number): { comixId: number } {
    this.getOneById(comixId);
    this.comixes = this.comixes.filter((c: Comix) => c.id !== Number(comixId));
    return { comixId };
  }
}
