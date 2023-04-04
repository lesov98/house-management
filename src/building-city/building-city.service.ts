import { Injectable } from '@nestjs/common';
import { CreateBuildingCityDto } from './dto/create-building-city.dto';
import { UpdateBuildingCityDto } from './dto/update-building-city.dto';

@Injectable()
export class BuildingCityService {
  create(createBuildingCityDto: CreateBuildingCityDto) {
    return 'This action adds a new buildingCity';
  }

  findAll() {
    return `This action returns all buildingCity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingCity`;
  }

  update(id: number, updateBuildingCityDto: UpdateBuildingCityDto) {
    return `This action updates a #${id} buildingCity`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingCity`;
  }
}
