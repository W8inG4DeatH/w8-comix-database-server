import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Comix } from './Comix';

@Controller('comixes')
export class ComixesController {
  trackId = 1;
  comixes: Comix[] = [
    {
      Id: this.trackId++,
      SeriesTitle: 'The Walking Dead Series',
      SeriesSubtitle: 'Days Gone Bye',
      ComixTitle: 'The Walking Dead',
      DisplayName: 'Days Gone Bye',
    },
  ];

  @Get()
  getAll() {
    return this.comixes;
  }

  @Get()
  getComix() {
    return {
      message: 'Comix',
    };
  }

  @Post()
  createComix(@Body() comix: Comix) {
    comix.Id = this.trackId++;
    this.comixes.push(comix);
    return comix;
  }

  @Put()
  updateComix(@Body() comix: Comix) {
    const comixToUpdate = this.comixes.find((c) => c.Id === Number(comix.Id));
    if (comixToUpdate) {
      Object.assign(comixToUpdate, comix);
    }
    return comixToUpdate;
  }

  @Delete(':id')
  deleteComix(@Param('id') comixId: string) {
    this.comixes = this.comixes.filter((c) => c.Id !== Number(comixId));
    return { comixId };
  }
}
