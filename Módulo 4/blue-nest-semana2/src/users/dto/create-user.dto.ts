import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
<<<<<<< HEAD
    example: 'Ivan',
    description: 'Nome do usuário a ser criado',
=======
    example: 'Sandro',
>>>>>>> a79773b39ef0d21462c462ee1f9e0929335f2f9f
  })
  name: string;

  @IsEmail()
  @ApiProperty({
<<<<<<< HEAD
    example: 'ivan@blue.com',
    description: 'Email do usuário a ser criado',
=======
    example: 'sandro@blue.com',
>>>>>>> a79773b39ef0d21462c462ee1f9e0929335f2f9f
  })
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'weak password',
  })
  @ApiProperty({
    example: '@Abc1234',
    description:
      'Senha do usuário a ser criado, mínimo de uma letra minúscula, uma maiuscula, um simbolo e um número.',
  })
  password: string;
}
