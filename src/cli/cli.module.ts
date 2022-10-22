import { Module } from '@nestjs/common';
import { LibraryBusinessModule } from 'src/use-cases/library-business.module';
import { AddBookInstanceCliCommand } from './add-book-instance.command';
import { AddBookCliCommand } from './add-book.command';

@Module({
  imports: [LibraryBusinessModule],
  providers: [AddBookInstanceCliCommand, AddBookCliCommand],
})
export class CliModule {}
