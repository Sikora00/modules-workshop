import { Module } from '@nestjs/common';
import { CatalogueBusinessModule } from '../use-cases/catalogue-business-logic.module';

@Module({
  imports: [CatalogueBusinessModule],
})
export class CatalogueCliModule {}
