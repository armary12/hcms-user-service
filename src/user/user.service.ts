import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { UserServiceAdapter } from './adapter/user.service.adapter';
import { UserDTO } from './dto/user.dto';
import { Model } from 'sequelize/types';

@Injectable()
export class UserService extends UserServiceAdapter {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  async getUser(): Promise<Array<Model>> {
    const users = await this.userRepository.findAll();
    return users;
  }

  async getUserById(id: number): Promise<UserDTO> {
    const user = await this.userRepository.findOne({
      attributes: [
        'username',
        'name',
        'firstName',
        'middleName',
        'lastName',
        'email',
        'type',
      ],
      where: { userId: id },
    });
    return new UserDTO(user);
  }

  async getUserByUsername(username: string): Promise<UserDTO> {
    const user = await this.userRepository.findOne({
      attributes: [
        'userId',
        'username',
        'name',
        'firstName',
        'middleName',
        'lastName',
        'email',
        'type',
        'password',
      ],
      where: { username: username },
    });
    return new UserDTO(user);
  }

  async addUser(userDTO: UserDTO): Promise<Model> {
    userDTO.createdDate = new Date();
    userDTO.updatedDate = new Date();
    userDTO.password = await this.encryptPassword(userDTO.password);

    const user = await this.userRepository.insert(userDTO);
    return user;
  }

  async updateUser(userDTO: UserDTO): Promise<[number, Model[]]> {
    userDTO.updatedDate = new Date();

    const user = await this.userRepository.update(userDTO, {
      where: {
        userId: userDTO.userId,
      },
    });
    return user;
  }
}
