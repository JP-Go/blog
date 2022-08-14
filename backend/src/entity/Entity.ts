export class Entity<T> {
  constructor(public props: T, protected id?: number | null) {}
}
