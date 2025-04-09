import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './cats/common/middleware/logger.middleware';
import { ErrorController } from './error/error.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, ErrorController, AuthController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
