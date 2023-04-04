import { Module } from '@nestjs/common';
import { BuildingCityService } from './building-city.service';
import { BuildingCityController } from './building-city.controller';

@Module({
  controllers: [BuildingCityController],
  providers: [BuildingCityService],
})
export class BuildingCityModule {}
