import { Injectable } from '@nestjs/common';
import { Book } from 'src/catalogue/model/book';
import { Books } from './ports/books';

export interface AddBook {
  author: string;
  isbn: string;
  title: string;
}

@Injectable()
export class AddingBook {
  constructor(private readonly books: Books) {}

  async execute({ author, isbn, title }: AddBook): Promise<void> {
    await this.books.add(new Book(isbn, title, author));
  }
}
