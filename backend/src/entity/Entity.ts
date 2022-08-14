export class Entity<T> {
  constructor(public props: T, public id?: number | null) {}
}
