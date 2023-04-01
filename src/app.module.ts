import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingCity } from '../entities/building-city.entity';
import { BuildingCooperator } from '../entities/building-cooperator.entity';
import { Building } from '../entities/building.entity';
import { City } from '../entities/city.entity';
import { Cooperator } from '../entities/cooperator.entity';
import { Region } from '../entities/region.entity';
import { Role } from '../entities/role.entity';
import { UserRole } from 'entities/user-role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'database.config';
import { MessageService } from './message/message.service';
import { MessageController } from './message/message.controller';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { User } from './user/user.entity';
import { Message } from './message/message.entity';
import { Approval } from 'entities/approval.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from './user/user.service';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [
    MessageModule,
    UserModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      ...config,
      entities: [
        UserRole,
        BuildingCity,
        BuildingCooperator,
        Building,
        City,
        Cooperator,
        Region,
        Role,
        User,
        Message,
        Approval,
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>(process.env.JWT_SECRET),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [AppController, MessageController, AuthController],
  providers: [
    UserService,
    UserRepository,
    AppService,
    MessageService,
    AuthService,
  ],
  exports: [UserModule],
})
export class AppModule {}
