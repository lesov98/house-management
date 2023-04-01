import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/dto/user.dto';
import { CreateUserDTO } from 'src/user/dto/create-user-dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() userDto: UserDTO): Promise<{ accessToken: string }> {
    return this.authService.login(userDto);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDTO) {
    const user = await this.userService.create(createUserDto);
    return this.authService.login(user);
  }
}
