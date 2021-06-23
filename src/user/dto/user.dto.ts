import { IsString, IsDate, IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from 'src/common/dto/base.dto';

export class UserDTO extends BaseDTO {
  @IsNumber()
  @ApiProperty({
    description: 'userId',
    type: Number,
    example: 1,
  })
  userId: number;

  @IsString()
  @ApiProperty({
    description: 'Username',
    type: String,
    example: 'admin',
  })
  username: string;

  @IsString()
  @ApiProperty({
    description: 'Password',
    type: String,
    example: 'password',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'User id card',
    type: String,
    example: '1100900448276',
  })
  idCard: string;

  @IsString()
  @ApiProperty({
    description: 'FirstName + LastName',
    type: String,
    example: 'ชลทิศ จิตรบุตร',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'User first name',
    type: String,
    example: 'ชลทิศ',
  })
  firstName: string;

  @IsString()
  @ApiProperty({
    description: 'User middle name',
    type: String,
    example: '',
  })
  middleName: string;

  @IsString()
  @ApiProperty({
    description: 'User last name',
    type: String,
    example: 'จิตรบุตร',
  })
  lastName: string;

  @IsString()
  @ApiProperty({
    description: 'User email',
    type: String,
    example: 'armarygg@gmail.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'User tel no',
    type: String,
    example: '0971106920',
  })
  telNo: string;

  @IsString()
  @ApiProperty({
    description: 'User gender',
    type: String,
    example: 'Male',
  })
  gender: string;

  @IsDate()
  @ApiProperty({
    description: 'User birth date',
    type: Date,
    example: '2019-12-31T12:59:59Z',
  })
  birthDate: Date;

  @IsString()
  @ApiProperty({
    description: 'User type',
    type: String,
    example: 'Setup Admin',
  })
  type: string;

  @IsString()
  @ApiProperty({
    description: 'User address',
    type: String,
    example: '16 ถนนเฉลิมพระเกียรติ์ ร.9 45',
  })
  address: string;

  @IsNumber()
  @ApiProperty({
    description: 'User subdistric id',
    type: Number,
    example: 103202,
  })
  subdisId: number;

  @IsNumber()
  @ApiProperty({
    description: 'User distric id',
    type: Number,
    example: 1032,
  })
  districtId: number;

  @IsNumber()
  @ApiProperty({
    description: 'User distric id',
    type: Number,
    example: 10,
  })
  provinceId: number;

  @IsNumber()
  @ApiProperty({
    description: 'User region id',
    type: Number,
    example: 1,
  })
  regionId: number;

  @IsNumber()
  @ApiProperty({
    description: 'User country id',
    type: Number,
    example: 764,
  })
  countryId: number;

  @IsBoolean()
  @ApiProperty({
    description: 'Is User deleted?',
    type: Boolean,
    example: false,
    default: false,
  })
  isDeleted: boolean;

  @IsString()
  @ApiProperty({
    description: 'Is User active?',
    type: String,
    example: 'active',
    default: 'active',
  })
  status: string;

  @IsNumber()
  @ApiProperty({
    description: 'User provider id',
    type: Number,
    example: 60,
  })
  providerId: number;

  @IsNumber()
  @ApiProperty({
    description: 'User company id',
    type: Number,
    example: 1,
  })
  companyId: number;

  @IsDate()
  @ApiProperty({
    description: 'create date of user',
    type: Date,
    example: '',
  })
  createdDate: Date;

  @IsDate()
  @ApiProperty({
    description: 'updated date of user',
    type: Date,
    example: '',
  })
  updatedDate: Date;
}
