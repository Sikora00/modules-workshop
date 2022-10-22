import { Module } from '@nestjs/common';
import { PersistanceJsonFileModule } from 'src/persistance/json-file/persistance-json-file.module';
import { AddingBook } from './adding-book';
import { AddingBookInstance } from './adding-book-instance';
import { CancelingHold } from './canceling-hold';
import { PlacingOnHold } from './placing-on-hold';

@Module({
  imports: [PersistanceJsonFileModule],
  providers: [AddingBook, AddingBookInstance, PlacingOnHold, CancelingHold],
  exports: [AddingBook, AddingBookInstance, PlacingOnHold, CancelingHold],
})
export class LibraryBusinessModule {}
