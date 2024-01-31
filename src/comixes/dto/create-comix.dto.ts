import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateComixDTO {
  @IsOptional()
  @IsString()
  SeriesTitle?: string;

  @IsOptional()
  @IsString()
  SeriesSubtitle?: string;

  @IsString()
  ComixTitle: string;

  @IsOptional()
  @IsString()
  DisplayName?: string;

  @IsOptional()
  @IsString()
  Author?: string;

  @IsOptional()
  @IsString()
  Publisher?: string;

  @IsOptional()
  @IsNumber()
  PublishmentYear?: number;

  @IsOptional()
  @IsNumber()
  NumberOfPages?: number;

  @IsOptional()
  CoverHard?: boolean;

  @IsOptional()
  @IsNumber()
  Rating?: number;

  @IsOptional()
  Collected?: boolean;
}
