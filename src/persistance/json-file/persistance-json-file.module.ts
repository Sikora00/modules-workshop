import { Module } from '@nestjs/common';
import { Books } from 'src/catalogue/use-cases/ports/books';
import { BookInstances } from 'src/use-cases/ports/book-instances';
import { Patrons } from 'src/use-cases/ports/patrons';
import { JsonFileBookInstances } from './json-file-book-instances';
import { JsonFileBooks } from './json-file-books';
import { JsonFilePatrons } from './json-file-patrons';
import { factoryToken, JsonFileReadWriteFactory } from './json-file-read-write';
import { BookInstances as CatalogueBookInstances } from 'src/catalogue/use-cases/ports/book-instances';

@Module({
  providers: [
    {
      provide: factoryToken,
      useValue: JsonFileReadWriteFactory,
    },
    JsonFileBookInstances,
    { provide: Books, useClass: JsonFileBooks },
    { provide: BookInstances, useExisting: JsonFileBookInstances },
    { provide: Patrons, useClass: JsonFilePatrons },
    { provide: CatalogueBookInstances, useExisting: JsonFileBookInstances },
  ],
  exports: [Books, BookInstances, CatalogueBookInstances, Patrons],
})
export class PersistanceJsonFileModule {}
