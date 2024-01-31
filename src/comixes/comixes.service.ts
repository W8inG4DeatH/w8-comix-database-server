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
      Id: this.trackId++,
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
      (c: Comix) => c.Id === Number(comix.Id),
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
    this.comixes = this.comixes.filter((c: Comix) => c.Id !== Number(comixId));
    return { comixId };
  }
}
