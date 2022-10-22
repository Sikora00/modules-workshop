import { Injectable } from '@nestjs/common';
import { BookInstance } from 'src/model/book-instance';
import { BookInstances } from './ports/book-instances';
import { Books } from './ports/books';

export interface AddBookInstance {
  isbn: string;
}

@Injectable()
export class AddingBookInstance {
  constructor(
    private readonly books: Books,
    private readonly bookInstances: BookInstances,
  ) {}

  async execute({ isbn }: AddBookInstance): Promise<BookInstance> {
    const book = await this.books.findOrFail(isbn);
    const newBookInstance = book.generateNewInstance();
    this.bookInstances.add(newBookInstance);
    return newBookInstance;
  }
}
