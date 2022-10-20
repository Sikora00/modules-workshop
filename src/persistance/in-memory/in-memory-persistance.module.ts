import { Module } from '@nestjs/common';
import { BookInstances } from 'src/use-cases/ports/book-instances';
import { Books } from 'src/use-cases/ports/books';
import { Patrons } from 'src/use-cases/ports/patrons';
import { InMemoryBookInstances } from './in-memory-book-instances';
import { InMemoryBooks } from './in-memory-books';
import { InMemoryPatrons } from './in-memory-patrons';

@Module({
  providers: [
    { provide: Books, useClass: InMemoryBooks },
    { provide: BookInstances, useClass: InMemoryBookInstances },
    { provide: Patrons, useClass: InMemoryPatrons },
  ],
  exports: [Books, BookInstances, Patrons],
})
export class InMemoryPersistanceModule {}
