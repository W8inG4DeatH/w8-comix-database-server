import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comix } from 'src/comix/comix.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>, // userRepository indicates database operations
    @InjectRepository(Comix) private comixRepository: Repository<Comix>,
  ) {}

  async createOne(user: CreateUserDTO): Promise<User> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async readAll(): Promise<User[]> {
    // const users = await this.userRepository.find();
    const users = await this.userRepository.find({ relations: ['comixes'] });
    return users;
  }

  async getOneById(userId: number): Promise<User> {
    const user: User = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User id ${userId} not found`);
    }
    return user;
  }

  async updateOne(user: UpdateUserDTO) {
    await this.getOneById(user.id);
    return this.userRepository.update(user.id, user);
  }

  async deleteOne(userId: number): Promise<User> {
    const userToDelete = await this.getOneById(userId);
    return this.userRepository.remove(userToDelete);
  }
  // async deleteOne(userId: number): Promise<void> {
  //   const user = await this.userRepository.findOne({
  //     where: { id: userId },
  //     relations: ['comixes'],
  //   });
  //   if (!user) {
  //     throw new NotFoundException(`User id ${userId} not found`);
  //   }
  //   if (user.comixes.length > 0) {
  //     await this.comixRepository.remove(user.comixes);
  //   }
  //   await this.userRepository.remove(user);
  // }
}
