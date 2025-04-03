import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      name: 'Cat 1',
      age: 2,
      breed: 'Persian',
    },
  ];

  findAll(): Cat[] {
    return this.cats;
  }
}
