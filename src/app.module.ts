import { Module } from '@nestjs/common';
import { LibraryController } from './api/library.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryPersistanceModule } from './persistance/in-memory/in-memory-persistance.module';
import { CatalogueApiModule } from './catalogue/api/catalogue-api.module';
import { PersistanceJsonFileModule } from './persistance/json-file/persistance-json-file.module';
import { CancelingHold } from './use-cases/canceling-hold';
import { PlacingOnHold } from './use-cases/placing-on-hold';

const persistance =
  process.env.ENV !== 'DEV'
    ? PersistanceJsonFileModule
    : InMemoryPersistanceModule;

@Module({
  imports: [CatalogueApiModule, persistance],
  controllers: [AppController, LibraryController],
  providers: [AppService, CancelingHold, PlacingOnHold],
})
export class AppModule {}
