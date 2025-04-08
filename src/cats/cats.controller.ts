import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(
    @Query('age', new DefaultValuePipe(0), ParseIntPipe) age: number,
    @Query('breed', new DefaultValuePipe('')) breed: string,
  ): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): string {
    return `This action returns a #${id} cat`;
  }
}
