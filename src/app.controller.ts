import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('')
  getComixList() {
    return {
      message: 'Comix list',
    };
  }

  @Get('/comix')
  getComixEdit() {
    return {
      message: 'Comix edition',
    };
  }

  @Post('')
  createComix(@Body() comix: { title: string }) {
    return comix;
  }

  @Put('')
  updateComix(@Body() comix: { title: string }) {
    return comix;
  }

  @Delete(':comixId')
  deleteComix(@Param() comixId: string) {
    return comixId;
  }
}
