import { Module } from '@nestjs/common';
import { LibraryController } from './api/library.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryBookInstances } from './persistance/in-memory/in-memory-book-instances';
import { PersistanceJsonFileModule } from './persistance/json-file/persistance-json-file.module';
import { AddingBook } from './use-cases/adding-book';
import { AddingBookInstance } from './use-cases/adding-book-instance';
import { CancelingHold } from './use-cases/canceling-hold';
import { PlacingOnHold } from './use-cases/placing-on-hold';

@Module({
  imports: [PersistanceJsonFileModule],
  controllers: [AppController, LibraryController],
  providers: [
    AppService,
    AddingBook,
    AddingBookInstance,
    CancelingHold,
    PlacingOnHold,
    InMemoryBookInstances,
  ],
})
export class AppModule {}
