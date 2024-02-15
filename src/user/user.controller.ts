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
import { UserService } from 'src/user/user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('User')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createOne(@Body() user: CreateUserDTO) {
    return this.userService.createOne(user);
  }

  @Get()
  readAll() {
    return this.userService.readAll();
  }

  @Put()
  updateOne(@Body() user: UpdateUserDTO) {
    return this.userService.updateOne(user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.deleteOne(userId);
  }

  @Get('/exception-404') // can make others by HttpStatus enum
  exampleException() {
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
