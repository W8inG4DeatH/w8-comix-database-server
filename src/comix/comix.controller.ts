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
import { ComixService } from 'src/comix/comix.service';
import { CreateComixDTO } from './dto/create-comix.dto';
import { UpdateComixDTO } from './dto/update-comix.dto';

@Controller('Comix')
export class ComixController {
  constructor(private comixService: ComixService) {}

  @Post()
  createOne(@Body() comix: CreateComixDTO) {
    return this.comixService.createOne(comix);
  }

  @Get()
  readAll() {
    return this.comixService.readAll();
  }

  @Put()
  updateOne(@Body() comix: UpdateComixDTO) {
    return this.comixService.updateOne(comix);
  }

  @Delete(':id')
  deleteComix(@Param('id', ParseIntPipe) comixId: number) {
    return this.comixService.deleteOne(comixId);
  }

  @Get('/exception-404') // can make others by HttpStatus enum
  exampleException() {
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
