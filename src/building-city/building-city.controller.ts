import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BuildingCityService } from './building-city.service';
import { CreateBuildingCityDto } from './dto/create-building-city.dto';
import { UpdateBuildingCityDto } from './dto/update-building-city.dto';

@Controller('building-city')
export class BuildingCityController {
  constructor(private readonly buildingCityService: BuildingCityService) {}

  @Post()
  create(@Body() createBuildingCityDto: CreateBuildingCityDto) {
    return this.buildingCityService.create(createBuildingCityDto);
  }

  @Get()
  findAll() {
    return this.buildingCityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingCityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBuildingCityDto: UpdateBuildingCityDto,
  ) {
    return this.buildingCityService.update(+id, updateBuildingCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingCityService.remove(+id);
  }
}
