import { IsNumber, IsString, IsOptional } from 'class-validator';
import { Comix } from 'src/comix/comix.entity';

export class UpdateUserDTO {
  @IsNumber({}, { message: 'Id must be a number' })
  id: number;

  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsOptional()
  comixes?: Comix[];
}
