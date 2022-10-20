import { Module } from '@nestjs/common';
import { BookInstances } from 'src/use-cases/ports/book-instances';
import { Books } from 'src/use-cases/ports/books';
import { Patrons } from 'src/use-cases/ports/patrons';
import { JsonFileBookInstances } from './json-file-book-instances';
import { JsonFileBooks } from './json-file-books';
import { JsonFilePatrons } from './json-file-patrons';
import { factoryToken, JsonFileReadWriteFactory } from './json-file-read-write';

@Module({
  providers: [
    {
      provide: factoryToken,
      useValue: JsonFileReadWriteFactory,
    },
    { provide: Books, useClass: JsonFileBooks },
    { provide: BookInstances, useClass: JsonFileBookInstances },
    { provide: Patrons, useClass: JsonFilePatrons },
  ],
  exports: [Books, BookInstances, Patrons],
})
export class PersistanceJsonFileModule {}
