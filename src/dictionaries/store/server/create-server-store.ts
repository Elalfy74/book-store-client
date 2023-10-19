export class ServerStore<T> {
  constructor(private _data: T) {}

  get data(): T {
    return this._data;
  }

  set data(next: T) {
    this._data = next;
  }
}
