import { Module } from '@nestjs/common';
import { LibraryController } from './api/library.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogueApiModule } from './catalogue/api/catalogue-api.module';
import { PersistanceJsonFileModule } from './persistance/json-file/persistance-json-file.module';
import { CancelingHold } from './use-cases/canceling-hold';
import { PlacingOnHold } from './use-cases/placing-on-hold';

@Module({
  imports: [CatalogueApiModule, PersistanceJsonFileModule],
  controllers: [AppController, LibraryController],
  providers: [AppService, CancelingHold, PlacingOnHold],
})
export class AppModule {}
