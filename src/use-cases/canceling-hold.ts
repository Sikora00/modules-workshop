import { Injectable } from '@nestjs/common';
import { Patrons } from './ports/patrons';

export interface CancelHold {
  patronId: string;
  bookId: string;
}

@Injectable()
export class CancelingHold {
  constructor(private readonly patrons: Patrons) {}

  async execute(command: CancelHold): Promise<void> {
    const patron = await this.patrons.findOrFail(command.patronId);
    patron.cancelHold(command.bookId);
    await this.patrons.save(patron);
  }
}
