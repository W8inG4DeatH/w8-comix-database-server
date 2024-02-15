import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Comix } from 'src/comix/comix.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Comix])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
