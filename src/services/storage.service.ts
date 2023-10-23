export class Storage {
  static get(key: StorageKeys): unknown {
    return localStorage.getItem(key);
  }

  static set(key: StorageKeys, value: unknown): void {
    localStorage.setItem(key, value as never);
  }

  static remove(key: StorageKeys): void {
    localStorage.removeItem(key);
  }
}
