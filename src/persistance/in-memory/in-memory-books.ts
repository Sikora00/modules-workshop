import { Injectable } from '@nestjs/common';
import { Books } from 'src/catalogue/use-cases/ports/books';
import { Book } from 'src/model/book';

@Injectable()
export class InMemoryBooks implements Books {
  private readonly books: Book[] = [];

  async add(book: Book): Promise<Book> {
    this.books.push(book);
    return book;
  }

  async findOrFail(isbn: string): Promise<Book> {
    const book = Book.find(this.books, isbn);
    if (!book) {
      throw new Error('Cannot find the book');
    }
    return book;
  }
}
