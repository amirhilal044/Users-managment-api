import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userReposioty: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto) {
    const newUser = this.userReposioty.create(createUserDto);
    return this.userReposioty.save(newUser);
  }

  findAll() {
    return this.userReposioty.find();
  }

  findOne(id: number) {
    return this.userReposioty.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    //return this.userReposioty.update(id,updateUserDto);
    //alternative to:
    const user = await this.findOne(id);
    return this.userReposioty.save({ ...user, ...updateUserDto});
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    return this.userReposioty.remove(user);
  }
}
