import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from 'src/user/dto/create-user-dto';
import { UserRepository } from 'src/user/user.repository';
import { UserLoginDTO } from 'src/user/dto/user-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}
  private readonly jwtSecret: string = process.env.JWT_SECRET;

  async login(
    userDto: UserLoginDTO | CreateUserDTO,
  ): Promise<{ accessToken: string }> {
    const user = await this.userService.findByEmail(userDto.email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      userDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      email: user.email,
      id: user.id,
      roles: user.userRoles?.map((val) => val.role.name) ?? [],
    };
    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken };
  }

  async register(createUserDto: CreateUserDTO): Promise<User> {
    const { email, password, firstName, lastName } = createUserDto;

    const userExists = await this.userRepository.findOne({ where: { email } });
    if (userExists) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User();
    user.email = email;
    user.password = hashedPassword;
    user.firstName = firstName;
    user.lastName = lastName;

    const newUser = await this.userService.create(user);
    return newUser;
  }
  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);

    if (user && user.comparePassword(password)) {
      return user;
    }
    return null;
  }
}
