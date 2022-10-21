import { Module } from '@nestjs/common';
import { CatalogueBusinessModule } from '../use-cases/catalogue-business-logic.module';
import { CatalogueController } from './catalogue.controller';

@Module({
  imports: [CatalogueBusinessModule],
  controllers: [CatalogueController],
})
export class CatalogueApiModule {}
