export interface Repository<T> {
  save(entity: any): T;
  findById(id: number): T | null;
  findAll(): Array<T>;
}
