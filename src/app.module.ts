import { Module } from '@nestjs/common';
import { LibraryController } from './api/library.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryPersistanceModule } from './persistance/in-memory/in-memory-persistance.module';
import { PersistanceJsonFileModule } from './persistance/json-file/persistance-json-file.module';
import { AddingBook } from './use-cases/adding-book';
import { AddingBookInstance } from './use-cases/adding-book-instance';
import { CancelingHold } from './use-cases/canceling-hold';
import { PlacingOnHold } from './use-cases/placing-on-hold';

const persistance =
  process.env.ENV !== 'DEV'
    ? PersistanceJsonFileModule
    : InMemoryPersistanceModule;

@Module({
  imports: [persistance],
  controllers: [AppController, LibraryController],
  providers: [
    AppService,
    AddingBook,
    AddingBookInstance,
    CancelingHold,
    PlacingOnHold,
  ],
})
export class AppModule {}
