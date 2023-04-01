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
import { User } from 'entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config,
      entities: [
        User,
        UserRole,
        BuildingCity,
        BuildingCooperator,
        Building,
        City,
        Cooperator,
        Region,
        Role,
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
