import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class JsonFileReadWrite<T> {
  constructor(private readonly filePath: string) {}
  read(): Promise<T[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, 'utf8', (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(JSON.parse(data));
      });
    });
  }

  save(collection: T[]): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        this.filePath,
        JSON.stringify(collection, null, 2),
        (error) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        },
      );
    });
  }
}

export const factoryToken = Symbol('json-file-read-write-factory');
export const JsonFileReadWriteFactory = <T>(
  fileName: string,
): JsonFileReadWrite<T> => new JsonFileReadWrite(fileName);
