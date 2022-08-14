export interface Repository<T> {
  save(entity: T): T;
  findById(id: number): T | null;
  findAll(): Array<T>;
}
