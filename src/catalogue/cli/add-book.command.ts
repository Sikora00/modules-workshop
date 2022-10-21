import { Logger } from '@nestjs/common';
import { Command, CommandRunner, Option } from 'nest-commander';
import { AddingBook } from '../use-cases/adding-book';

interface AddBookOptions {
  isbn: string;
  title: string;
  author: string;
}

@Command({ name: 'add-book', description: 'Add new book to the catalogue' })
export class AddBookCliCommand extends CommandRunner {
  constructor(private readonly addingBook: AddingBook) {
    super();
  }

  @Option({
    flags: '--isbn [isbn]',
    description: `The book's isbn`,
    required: true,
  })
  parseIsbn(val: string): string {
    return val;
  }

  @Option({
    flags: '--author [author]',
    description: `The book's author`,
    required: true,
  })
  parseAuthor(val: string): string {
    return val;
  }

  @Option({
    flags: '--title [title]',
    description: `The book's title`,
    required: true,
  })
  parseTitle(val: string): string {
    return val;
  }

  async run(passedParam: string[], options: AddBookOptions): Promise<void> {
    const logger = new Logger();
    await this.addingBook.execute(options);

    logger.log(`Book has been added`);
  }
}
