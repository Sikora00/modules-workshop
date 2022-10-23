export class BookInstance {
  constructor(public readonly id: string, public readonly isbn: string) {}

  static findById(books: BookInstance[], bookId: string): BookInstance | null {
    return books.find(({ id }) => id === bookId) ?? null;
  }
}
