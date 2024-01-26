import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ComixesController } from './comixes/comixes.controller';

@Module({
  imports: [],
  controllers: [AppController, ComixesController],
})
export class AppModule {}
