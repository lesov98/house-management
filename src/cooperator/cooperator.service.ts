import { Injectable } from '@nestjs/common';
import { CreateCooperatorDto } from './dto/create-cooperator.dto';
import { UpdateCooperatorDto } from './dto/update-cooperator.dto';

@Injectable()
export class CooperatorService {
  create(createCooperatorDto: CreateCooperatorDto) {
    return 'This action adds a new cooperator';
  }

  findAll() {
    return `This action returns all cooperator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cooperator`;
  }

  update(id: number, updateCooperatorDto: UpdateCooperatorDto) {
    return `This action updates a #${id} cooperator`;
  }

  remove(id: number) {
    return `This action removes a #${id} cooperator`;
  }
}
