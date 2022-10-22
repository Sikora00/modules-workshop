import { Module } from '@nestjs/common';
import { LibraryController } from './api/library.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryPersistanceModule } from './persistance/in-memory/in-memory-persistance.module';
import { PersistanceJsonFileModule } from './persistance/json-file/persistance-json-file.module';
import { LibraryBusinessModule } from './use-cases/library-business.module';

const persistance =
  process.env.ENV === 'DEV'
    ? InMemoryPersistanceModule
    : PersistanceJsonFileModule;
@Module({
  imports: [LibraryBusinessModule.register(persistance)],
  controllers: [AppController, LibraryController],
  providers: [AppService],
})
export class AppModule {}
