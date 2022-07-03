export class Database {
  private data: string[] = [];

  async add() {
    if (this.data.length > 3) {
      throw new Error('Database overflow');
    }
    this.data.push('');
  }
}
