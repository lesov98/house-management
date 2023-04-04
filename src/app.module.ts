import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'database.config';
import { MessageService } from './message/message.service';
import { MessageController } from './message/message.controller';
import { MessageModule } from './message/message.module';
import { Message } from './message/entities/message.entity';
import { AuthController } from './auth/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RolesSeeder } from 'seeders/RolesSeeder';
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';
import { RegionModule } from './region/region.module';
import { CityModule } from './city/city.module';
import { BuildingModule } from './building/building.module';
import { CooperatorModule } from './cooperator/cooperator.module';
import { BuildingCooperatorModule } from './building-cooperator/building-cooperator.module';
import { UserRoleModule } from './user-role/user-role.module';
import { ApprovalModule } from './approval/approval.module';
import { Approval } from './approval/entities/approval.entity';
import { BuildingCityModule } from './building-city/building-city.module';
import { BuildingCity } from './building-city/entities/building-city.entity';
import { BuildingCooperator } from './building-cooperator/entities/building-cooperator.entity';
import { Building } from './building/entities/building.entity';
import { City } from './city/entities/city.entity';
import { Cooperator } from './cooperator/entities/cooperator.entity';
import { Region } from './region/entities/region.entity';
import { Role } from './roles/entities/role.entity';
import { UserRole } from './user-role/entities/user-role.entity';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
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
      logging: 'all',
    }),
    ConfigModule,
    AuthModule,
    RegionModule,
    CityModule,
    BuildingModule,
    CooperatorModule,
    BuildingCooperatorModule,
    BuildingCityModule,
    UserRoleModule,
    ApprovalModule,
    MessageModule,
    UserModule,
    RolesModule,
  ],
  controllers: [AppController, MessageController, AuthController],
  providers: [AppService, MessageService, RolesService],
  exports: [UserModule, RolesModule],
})
export class AppModule {}
