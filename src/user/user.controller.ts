import {
  Controller,
  Get,
  Put,
  Post,
  Logger,
  BadRequestException,
  Body,
} from '@nestjs/common';
import { UserControllerAdapter } from './adapter/user.controller.adapter';
import { UserService } from './user.service';
import { ResponseDTO } from 'src/common/dto/response.dto';
import { UserDTO } from './dto/user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('/v1/user')
export class UserController extends UserControllerAdapter {
  constructor(private readonly userService: UserService) {
    super();
  }

  @Get('/')
  getUser(): Promise<any> {
    return this.userService
      .getUser()
      .then((data) => {
        const responseDTO = new ResponseDTO();
        responseDTO['users'] = data;

        return responseDTO;
      })
      .catch((err) => {
        Logger.error(err, err.stack, UserService.name);
        throw new BadRequestException(err.message);
      });
  }

  @Put('/')
  addUser(
    @Body()
    userDTO: UserDTO,
  ): Promise<any> {
    return this.userService
      .addUser(userDTO)
      .then((data) => {
        const responseDTO = new ResponseDTO();
        responseDTO['user'] = data;

        return responseDTO;
      })
      .catch((err) => {
        Logger.error(err, err.stack, UserService.name);
        throw new BadRequestException(err.message);
      });
  }

  @Post('/')
  updateUser(@Body() userDTO: UserDTO): Promise<any> {
    return this.userService
      .updateUser(userDTO)
      .then((data) => {
        const responseDTO = new ResponseDTO();
        responseDTO['user'] = data;

        return responseDTO;
      })
      .catch((err) => {
        Logger.error(err, err.stack, UserService.name);
        throw new BadRequestException(err.message);
      });
  }
}
