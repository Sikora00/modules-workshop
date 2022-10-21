import { BookInstance } from 'src/model/book-instance';

export abstract class BookInstances {
  abstract add(newBookInstance: BookInstance): Promise<BookInstance>;
  abstract findOrFail(bookId: string): Promise<BookInstance>;
}
