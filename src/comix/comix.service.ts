import { Injectable, NotFoundException } from '@nestjs/common';
import { Comix } from './comix.entity';
import { CreateComixDTO } from './dto/create-comix.dto';
import { UpdateComixDTO } from './dto/update-comix.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class ComixService {
  constructor(
    @InjectRepository(Comix)
    private comixRepository: Repository<Comix>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createOne(createComixDto: CreateComixDTO): Promise<Comix> {
    const { userId, ...comixDetails } = createComixDto;

    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException(`User with ID "${userId}" not found`);
    }

    const comix = this.comixRepository.create({
      ...comixDetails,
      user, // Assigns the user object to comix, which automatically sets the userId
    });

    await this.comixRepository.save(comix);

    return comix;
  }

  async readAll(): Promise<Comix[]> {
    // const comixes = await this.comixRepository.find();
    const comixes = await this.comixRepository.find({ relations: ['user'] });
    return comixes;
  }

  async getOneById(comixId: number): Promise<Comix> {
    const comix: Comix = await Comix.findOne({ where: { id: comixId } });
    if (!comix) {
      throw new NotFoundException(`Comix id ${comixId} not found`);
    }
    return comix;
  }

  async updateOne(comix: UpdateComixDTO) {
    await this.getOneById(comix.id);
    return this.comixRepository.update(comix.id, comix);
  }

  async deleteOne(comixId: number): Promise<Comix> {
    const comixToDelete = await this.getOneById(comixId);
    return this.comixRepository.remove(comixToDelete);
  }
}
