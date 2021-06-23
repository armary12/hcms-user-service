import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsPositive } from 'class-validator';

export default class ResponseListDTO {
  constructor() {
    this.items = [];
  }

  @IsArray()
  items: Array<ResponseListDTO>;

  @IsPositive()
  @ApiProperty()
  count: number;
}
