import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogueApiModule } from './catalogue/api/catalogue-api.module';
import { LendingModule } from './lending/lending.module';

@Module({
  imports: [CatalogueApiModule, LendingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
