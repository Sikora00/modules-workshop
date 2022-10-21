import { Patron } from 'src/lending/model/patron';

export abstract class Patrons {
  abstract findOrCreate(patronId: string): Promise<Patron>;
  abstract findOrFail(patronId: string): Promise<Patron>;
  abstract save(patron: Patron): Promise<Patron>;
}
