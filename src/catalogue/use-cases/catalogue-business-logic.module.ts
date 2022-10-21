import { Module } from '@nestjs/common';
import { InMemoryPersistanceModule } from 'src/persistance/in-memory/in-memory-persistance.module';
import { AddingBook } from './adding-book';
import { AddingBookInstance } from './adding-book-instance';

@Module({
  imports: [InMemoryPersistanceModule],
  providers: [AddingBook, AddingBookInstance],
  exports: [AddingBook, AddingBookInstance],
})
export class CatalogueBusinessModule {}
