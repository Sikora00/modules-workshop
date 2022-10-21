import { Module } from '@nestjs/common';
import { Books } from 'src/catalogue/use-cases/ports/books';
import { BookInstances } from 'src/use-cases/ports/book-instances';
import { Patrons } from 'src/use-cases/ports/patrons';
import { InMemoryBookInstances } from './in-memory-book-instances';
import { InMemoryBooks } from './in-memory-books';
import { InMemoryPatrons } from './in-memory-patrons';
import { BookInstances as CatalogueBookInstances } from 'src/catalogue/use-cases/ports/book-instances';

@Module({
  providers: [
    InMemoryBookInstances,
    { provide: Books, useClass: InMemoryBooks },
    { provide: BookInstances, useExisting: InMemoryBookInstances },
    { provide: Patrons, useClass: InMemoryPatrons },
    { provide: CatalogueBookInstances, useExisting: InMemoryBookInstances },
  ],
  exports: [Books, BookInstances, CatalogueBookInstances, Patrons],
})
export class InMemoryPersistanceModule {}
