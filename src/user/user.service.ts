import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>, // userRepository indicates database operations
  ) {}

  createOne(user: CreateUserDTO): Promise<User> {
    return this.userRepository.save(user);
  }

  readAll(): Promise<User[]> {
    return this.userRepository.find();
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
}
