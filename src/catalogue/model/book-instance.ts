export class BookInstance {
  constructor(private readonly id: string, private readonly isbn: string) {}

  static findById(books: BookInstance[], bookId: string): BookInstance | null {
    return books.find(({ id }) => id === bookId) ?? null;
  }

  getSnapshot(): BookInstanceSnapshot {
    return { id: this.id, isbn: this.isbn };
  }
}

export interface BookInstanceSnapshot {
  id: string;
  isbn: string;
}
