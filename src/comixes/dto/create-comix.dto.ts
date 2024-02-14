import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateComixDTO {
  @IsOptional()
  @IsString()
  seriesTitle?: string;

  @IsOptional()
  @IsString()
  seriesSubtitle?: string;

  @IsString()
  comixTitle: string;

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
  coverHard?: boolean;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsOptional()
  collected?: boolean;
}
