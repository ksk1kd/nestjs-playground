import {
  BadRequestException,
  Controller,
  ForbiddenException,
  Get,
} from '@nestjs/common';

@Controller('error')
export class ErrorController {
  @Get('forbidden')
  forbidden(): string {
    throw new ForbiddenException();
  }

  @Get('bad-request')
  badRequetst(): string {
    throw new BadRequestException();
  }
}
