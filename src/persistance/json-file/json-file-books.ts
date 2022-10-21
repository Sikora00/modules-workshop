import { Inject, Injectable } from '@nestjs/common';
import { Books } from 'src/catalogue/use-cases/ports/books';
import { Book, BookSnapshot } from 'src/model/book';
import {
  factoryToken,
  JsonFileReadWrite,
  JsonFileReadWriteFactory,
} from './json-file-read-write';

@Injectable()
export class JsonFileBooks implements Books {
  private readonly jsonFileReadWrite: JsonFileReadWrite<BookSnapshot>;
  constructor(
    @Inject(factoryToken)
    jsonFileReadWriteFactory: typeof JsonFileReadWriteFactory<BookSnapshot>,
  ) {
    this.jsonFileReadWrite = jsonFileReadWriteFactory('./books.json');
  }

  async add(newBook: Book): Promise<Book> {
    const books = await this.getCollection();
    books.push(newBook);
    await this.jsonFileReadWrite.save(
      books.map((record) => record.getSnapshot()),
    );
    return newBook;
  }

  async findOrFail(bookId: string): Promise<Book> {
    const books = await this.getCollection();
    const foundBook = Book.find(books, bookId);
    if (!foundBook) {
      throw new Error('Could not find the book');
    }
    return foundBook;
  }

  private async getCollection(): Promise<Book[]> {
    const jsonCollection = await this.jsonFileReadWrite.read();
    return jsonCollection.map(
      ({ isbn, author, title }) => new Book(isbn, title, author),
    );
  }
}
