import { Injectable } from '@nestjs/common';
import { CreateBuildingCooperatorDto } from './dto/create-building-cooperator.dto';
import { UpdateBuildingCooperatorDto } from './dto/update-building-cooperator.dto';

@Injectable()
export class BuildingCooperatorService {
  create(createBuildingCooperatorDto: CreateBuildingCooperatorDto) {
    return 'This action adds a new buildingCooperator';
  }

  findAll() {
    return `This action returns all buildingCooperator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingCooperator`;
  }

  update(id: number, updateBuildingCooperatorDto: UpdateBuildingCooperatorDto) {
    return `This action updates a #${id} buildingCooperator`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingCooperator`;
  }
}
