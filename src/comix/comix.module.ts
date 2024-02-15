import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comix } from './comix.entity';
import { ComixService } from './comix.service';
import { ComixController } from './comix.controller';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comix, User])],
  controllers: [ComixController],
  providers: [ComixService],
})
export class ComixModule {}
