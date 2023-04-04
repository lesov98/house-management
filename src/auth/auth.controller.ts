import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/user/dto/create-user-dto';
import { UserService } from 'src/user/user.service';
import { UserLoginDTO } from 'src/user/dto/user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() userDto: UserLoginDTO): Promise<{ accessToken: string }> {
    return this.authService.login(userDto);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDTO) {
    await this.userService.create(createUserDto);
    return this.authService.login(createUserDto);
  }
}
