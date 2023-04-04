import { IsString, IsNotEmpty } from 'class-validator';

export class UserLoginDTO {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
