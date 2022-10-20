import { Injectable } from '@nestjs/common';
import { Book } from 'src/model/book';
import { Books } from 'src/use-cases/ports/books';

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
