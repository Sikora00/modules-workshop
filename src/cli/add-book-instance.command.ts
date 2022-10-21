import { Logger } from '@nestjs/common';
import { Command, CommandRunner, Option } from 'nest-commander';
import { AddingBookInstance } from 'src/use-cases/adding-book-instance';

interface AddBookInstanceOptions {
  isbn: string;
}

@Command({ name: 'add-book-instance', description: 'Add new book instance' })
export class AddBookInstanceCliCommand extends CommandRunner {
  constructor(private readonly addingBookInstance: AddingBookInstance) {
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

  async run(
    passedParam: string[],
    options: AddBookInstanceOptions,
  ): Promise<void> {
    const logger = new Logger();

    logger.log(JSON.stringify(await this.addingBookInstance.execute(options)));
  }
}
