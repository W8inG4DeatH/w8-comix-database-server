import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateComixDTO {
  @IsNumber({}, { message: 'Id must be a number' }) // example of custom message
  id: number;

  @IsString()
  comixTitle: string;

  @IsOptional()
  @IsString()
  seriesTitle?: string;

  @IsOptional()
  @IsString()
  seriesSubtitle?: string;

  @IsOptional()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @IsNumber()
  publishmentYear?: number;

  @IsOptional()
  @IsNumber()
  numberOfPages?: number;

  @IsOptional()
  @IsString()
  coverUrlLink?: string;

  @IsOptional()
  coverHard?: boolean;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsOptional()
  collected?: boolean;

  @IsOptional()
  @IsNumber()
  userId: number;
}
