import { Module } from '@nestjs/common';
import { LibraryController } from './api/library.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryBusinessModule } from './use-cases/library-business.module';

@Module({
  imports: [LibraryBusinessModule],
  controllers: [AppController, LibraryController],
  providers: [AppService],
})
export class AppModule {}
