import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    createUser(CreateUserDto: CreateUserDto): Promise<User> {
        const user: User = new User();
        user.name = CreateUserDto.name;
        user.age = CreateUserDto.age;
        user.email = CreateUserDto.email;
        user.username = CreateUserDto.username
        user.password = CreateUserDto.password;
        user.gender = CreateUserDto.gender;
        return this.userRepository.save(user);
    }

    findAllUser(): Promise<User[]> {
        return this.userRepository.find();
    }

    viewUser(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const user: User = new User();
        user.name = updateUserDto.name;
        user.age = updateUserDto.age;
        user.email = updateUserDto.email;
        user.username = updateUserDto.username
        user.password = updateUserDto.password;
        user.id = id;
        return this.userRepository.save(user);
    }

    removeUser(id: number): Promise<{ affected?: number }> {
        return this.userRepository.delete(id);
    }
}