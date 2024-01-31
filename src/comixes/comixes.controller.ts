import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ComixesService } from 'src/comixes/comixes.service';
import { CreateComixDTO } from './dto/create-comix.dto';
import { UpdateComixDTO } from './dto/update-comix.dto';

@Controller('comixes')
export class ComixesController {
  constructor(private comixesService: ComixesService) {}

  @Post()
  createOne(@Body() comix: CreateComixDTO) {
    return this.comixesService.createOne(comix);
  }

  @Get()
  readAll() {
    return this.comixesService.readAll();
  }

  @Put()
  updateOne(@Body() comix: UpdateComixDTO) {
    return this.comixesService.updateOne(comix);
  }

  @Delete(':id')
  deleteComix(@Param('id', ParseIntPipe) comixId: number) {
    return this.comixesService.deleteOne(comixId);
  }

  @Get('/exception-404') // can make others by HttpStatus enum
  exampleException() {
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
