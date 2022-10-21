import { Controller, Get, Param } from '@nestjs/common';
import { BookInstance } from 'src/model/book-instance';
import { AddingBook } from '../use-cases/adding-book';
import { AddingBookInstance } from '../use-cases/adding-book-instance';

@Controller()
export class CatalogueController {
  constructor(
    private readonly addingBook: AddingBook,
    private readonly addingBookInstance: AddingBookInstance,
  ) {}

  @Get('add-book/:isbn/:title/:author')
  async addBook(
    @Param('isbn') isbn: string,
    @Param('author') author: string,
    @Param('title') title: string,
  ): Promise<string> {
    await this.addingBook.execute({ isbn, author, title });
    return `Book has been added`;
  }

  @Get('add-book-instance/:isbn')
  addBookInstance(@Param('isbn') isbn: string): Promise<BookInstance> {
    return this.addingBookInstance.execute({ isbn });
  }
}
