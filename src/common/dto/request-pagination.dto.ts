import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class RequestPaginationDTO {

  @IsString()
  @ApiProperty()
  query = '';

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  @ApiProperty()
  page = 1;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  @ApiProperty()
  limit = 10;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  id = 0;
}
