import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateComixDTO {
  @IsNumber({}, { message: 'Id must be a number' }) // example of custom message
  Id: number;

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
