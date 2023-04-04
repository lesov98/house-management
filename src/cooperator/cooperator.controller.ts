import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CooperatorService } from './cooperator.service';
import { CreateCooperatorDto } from './dto/create-cooperator.dto';
import { UpdateCooperatorDto } from './dto/update-cooperator.dto';

@Controller('cooperator')
export class CooperatorController {
  constructor(private readonly cooperatorService: CooperatorService) {}

  @Post()
  create(@Body() createCooperatorDto: CreateCooperatorDto) {
    return this.cooperatorService.create(createCooperatorDto);
  }

  @Get()
  findAll() {
    return this.cooperatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cooperatorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCooperatorDto: UpdateCooperatorDto,
  ) {
    return this.cooperatorService.update(+id, updateCooperatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cooperatorService.remove(+id);
  }
}
