import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comix } from './Comix';
import { ComixesService } from './comixes.service';
import { ComixesController } from './comixes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Comix])],
  providers: [ComixesService],
  controllers: [ComixesController],
})
export class ComixModule {}
