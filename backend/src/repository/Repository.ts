export interface Repository<T> {
  save(entity: T | any): T;
  findById(id: number): T | null;
  findAll(): Array<T>;
}
