import { Module } from '@nestjs/common';
import { CooperatorService } from './cooperator.service';
import { CooperatorController } from './cooperator.controller';

@Module({
  controllers: [CooperatorController],
  providers: [CooperatorService],
})
export class CooperatorModule {}
