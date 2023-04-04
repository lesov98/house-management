import { PartialType } from '@nestjs/swagger';
import { CreateBuildingCooperatorDto } from './create-building-cooperator.dto';

export class UpdateBuildingCooperatorDto extends PartialType(
  CreateBuildingCooperatorDto,
) {}
