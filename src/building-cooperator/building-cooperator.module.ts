import { Module } from '@nestjs/common';
import { BuildingCooperatorService } from './building-cooperator.service';
import { BuildingCooperatorController } from './building-cooperator.controller';

@Module({
  controllers: [BuildingCooperatorController],
  providers: [BuildingCooperatorService],
})
export class BuildingCooperatorModule {}
