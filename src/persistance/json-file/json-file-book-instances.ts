import { Inject, Injectable } from '@nestjs/common';
import {
  BookInstance,
  BookInstanceSnapshot,
} from 'src/catalogue/model/book-instance';
import { BookInstances } from 'src/lending/use-cases/ports/book-instances';
import {
  factoryToken,
  JsonFileReadWrite,
  JsonFileReadWriteFactory,
} from './json-file-read-write';

@Injectable()
export class JsonFileBookInstances implements BookInstances {
  private readonly jsonFileReadWrite: JsonFileReadWrite<BookInstanceSnapshot>;
  constructor(
    @Inject(factoryToken)
    jsonFileReadWriteFactory: typeof JsonFileReadWriteFactory<BookInstanceSnapshot>,
  ) {
    this.jsonFileReadWrite = jsonFileReadWriteFactory('./book-instances.json');
  }

  async add(newBookInstance: BookInstance): Promise<BookInstance> {
    const bookInstances = await this.getCollection();
    bookInstances.push(newBookInstance);
    await this.jsonFileReadWrite.save(
      bookInstances.map((record) => record.getSnapshot()),
    );
    return newBookInstance;
  }

  async findOrFail(bookId: string): Promise<BookInstance> {
    const bookInstances = await this.getCollection();
    const foundBook = BookInstance.findById(bookInstances, bookId);
    if (!foundBook) {
      throw new Error('Could not find the book instance');
    }
    return foundBook;
  }

  private async getCollection(): Promise<BookInstance[]> {
    const jsonCollection = await this.jsonFileReadWrite.read();
    return jsonCollection.map(({ id, isbn }) => new BookInstance(id, isbn));
  }
}
