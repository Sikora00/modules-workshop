import { Module } from '@nestjs/common';
import { InMemoryBookInstances } from 'src/persistance/in-memory-book-instances';
import { InMemoryBooks } from 'src/persistance/in-memory-books';
import { AddingBook } from 'src/use-cases/adding-book';
import { AddingBookInstance } from 'src/use-cases/adding-book-instance';
import { AddBookInstanceCliCommand } from './add-book-instance.command';
import { AddBookCliCommand } from './add-book.command';

@Module({
  providers: [
    InMemoryBooks,
    InMemoryBookInstances,
    AddingBook,
    AddingBookInstance,
    AddBookInstanceCliCommand,
    AddBookCliCommand,
  ],
})
export class CliModule {}
