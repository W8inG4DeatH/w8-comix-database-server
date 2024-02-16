import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ComixModule } from './comix/comix.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from 'config/database.config';
import { envValidationSchema } from 'config/envValidation.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(databaseConfig),
    ConfigModule.forRoot({
      isGlobal: true, // needed for access to configService from whole application
      envFilePath: [`.env.${process.env.NODE_ENV}`], // file name depends on environment
      validationSchema: envValidationSchema,
    }),
    UserModule,
    ComixModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
