import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BuildingCooperatorService } from './building-cooperator.service';
import { CreateBuildingCooperatorDto } from './dto/create-building-cooperator.dto';
import { UpdateBuildingCooperatorDto } from './dto/update-building-cooperator.dto';

@Controller('building-cooperator')
export class BuildingCooperatorController {
  constructor(
    private readonly buildingCooperatorService: BuildingCooperatorService,
  ) {}

  @Post()
  create(@Body() createBuildingCooperatorDto: CreateBuildingCooperatorDto) {
    return this.buildingCooperatorService.create(createBuildingCooperatorDto);
  }

  @Get()
  findAll() {
    return this.buildingCooperatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingCooperatorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBuildingCooperatorDto: UpdateBuildingCooperatorDto,
  ) {
    return this.buildingCooperatorService.update(
      +id,
      updateBuildingCooperatorDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingCooperatorService.remove(+id);
  }
}
