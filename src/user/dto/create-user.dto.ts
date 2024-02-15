import { IsString, IsOptional } from 'class-validator';
import { Comix } from 'src/comix/comix.entity';

export class CreateUserDTO {
  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsOptional()
  comixes?: Comix[];
}
