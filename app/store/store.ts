export interface Store {
  containsKey(key: string): boolean;
  getItem(key: string): string;
  getJson<T extends Object>(key: string, defaultVal:T): T;
  setItem(key: string, value: string): void;
  setJson<T extends Object>(key: string, value: T): void;
  removeItem(key: string): void;
  clear(): void;
  keys(): string[];
}