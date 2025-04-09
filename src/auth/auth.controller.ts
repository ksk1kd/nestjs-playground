import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth.guard';

@Controller('auth')
@UseGuards(AuthGuard)
export class AuthController {
  @Get('')
  get(): string {
    return 'This page is guarded.';
  }
}
