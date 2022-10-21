import { Module } from '@nestjs/common';
import { PersistanceJsonFileModule } from 'src/persistance/json-file/persistance-json-file.module';
import { AddingBook } from 'src/use-cases/adding-book';
import { AddingBookInstance } from 'src/use-cases/adding-book-instance';
import { AddBookInstanceCliCommand } from './add-book-instance.command';
import { AddBookCliCommand } from './add-book.command';

@Module({
  imports: [PersistanceJsonFileModule],
  providers: [
    AddingBook,
    AddingBookInstance,
    AddBookInstanceCliCommand,
    AddBookCliCommand,
  ],
})
export class CliModule {}
