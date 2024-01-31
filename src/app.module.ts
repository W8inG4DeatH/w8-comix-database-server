import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ComixesController } from './comixes/comixes.controller';
import { ComixesService } from './comixes/comixes.service';

@Module({
  imports: [],
  controllers: [AppController, ComixesController],
  providers: [ComixesService],
})
export class AppModule {}
