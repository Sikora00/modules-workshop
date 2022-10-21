import { Book } from 'src/catalogue/model/book';

export abstract class Books {
  abstract add(book: Book): Promise<Book>;
  abstract findOrFail(isbn: string): Promise<Book>;
}
