import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Sandro',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'sandro@blue.com',
  })
  email: string;
}
