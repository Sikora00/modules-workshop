import { Injectable } from '@nestjs/common';
import { InMemoryBookInstances } from '../../persistance/in-memory/in-memory-book-instances';
import { BookInstances } from './ports/book-instances';
import { Patrons } from './ports/patrons';

export interface PlaceOnHold {
  patronId: string;
  bookId: string;
}

@Injectable()
export class PlacingOnHold {
  constructor(
    private readonly findAvailableBook: BookInstances,
    private readonly patrons: Patrons,
  ) {}

  async execute(command: PlaceOnHold): Promise<void> {
    await this.findAvailableBook.findOrFail(command.bookId);
    const patron = await this.patrons.findOrCreate(command.patronId);
    patron.placeOnHold(command.bookId);
    await this.patrons.save(patron);
  }
}
