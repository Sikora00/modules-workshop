import { Inject, Injectable } from '@nestjs/common';
import { Patron, PatronSnapshot } from 'src/lending/model/patron';
import { Patrons } from 'src/lending/use-cases/ports/patrons';
import {
  factoryToken,
  JsonFileReadWrite,
  JsonFileReadWriteFactory,
} from './json-file-read-write';

@Injectable()
export class JsonFilePatrons implements Patrons {
  private readonly jsonFileReadWrite: JsonFileReadWrite<PatronSnapshot>;

  constructor(
    @Inject(factoryToken)
    jsonFileReadWriteFactory: typeof JsonFileReadWriteFactory<PatronSnapshot>,
  ) {
    this.jsonFileReadWrite = jsonFileReadWriteFactory('./patrons.json');
  }

  async findOrCreate(patronId: string): Promise<Patron> {
    const patrons = await this.getCollection();
    const foundPatron = Patron.findById(patrons, patronId);
    if (!foundPatron) {
      const patron = new Patron(patronId, []);
      patrons.push(patron);
      return patron;
    }
    return foundPatron;
  }
  async findOrFail(patronId: string): Promise<Patron> {
    const patrons = await this.getCollection();
    const foundPatron = Patron.findById(patrons, patronId);
    if (!foundPatron) {
      throw new Error('Cannot find the patron');
    }
    return foundPatron;
  }

  async save(patron: Patron): Promise<Patron> {
    const patrons = await this.getCollection();
    const index = Patron.findIndexOfPatron(patrons, patron);
    if (index < 0) {
      patrons.push(patron);
    } else {
      patrons[index] = patron;
    }
    await this.jsonFileReadWrite.save(
      patrons.map((patron) => patron.getSnapshot()),
    );
    return patron;
  }

  private async getCollection(): Promise<Patron[]> {
    const jsonCollection = await this.jsonFileReadWrite.read();
    return jsonCollection.map(
      ({ id, booksOnHold }) => new Patron(id, booksOnHold),
    );
  }
}
