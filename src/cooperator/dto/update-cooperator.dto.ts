import { PartialType } from '@nestjs/swagger';
import { CreateCooperatorDto } from './create-cooperator.dto';

export class UpdateCooperatorDto extends PartialType(CreateCooperatorDto) {}
