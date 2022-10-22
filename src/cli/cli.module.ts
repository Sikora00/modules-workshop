import { Module } from '@nestjs/common';
import { PersistanceJsonFileModule } from 'src/persistance/json-file/persistance-json-file.module';
import { LibraryBusinessModule } from 'src/use-cases/library-business.module';
import { AddBookInstanceCliCommand } from './add-book-instance.command';
import { AddBookCliCommand } from './add-book.command';

@Module({
  imports: [LibraryBusinessModule.register(PersistanceJsonFileModule)],
  providers: [AddBookInstanceCliCommand, AddBookCliCommand],
})
export class CliModule {}
