import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComixModule } from './comixes/comixes.module';

@Module({
  imports: [
    // SqLite
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/comix_db.sqlite3', // database path
      autoLoadEntities: true,
      synchronize: true,
    }),
    // My SQL
    // TypeOrmModule.forRoot({
    //   type: 'mysql', // database type
    //   host: 'localhost', // database host
    //   port: 3306, // MySQL port
    //   username: 'root', // username
    //   password: '2011weronika', // password
    //   database: 'comix_db_mysql', // database name
    //   // entities: [], // entities
    //   autoLoadEntities: true, // automatically load entities
    //   synchronize: true, // setting to true automatically synchronizes the database schema, use only in a development environment
    // }),
    ComixModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
