import { PartialType } from '@nestjs/swagger';
import { CreateBuildingCityDto } from './create-building-city.dto';

export class UpdateBuildingCityDto extends PartialType(CreateBuildingCityDto) {}
