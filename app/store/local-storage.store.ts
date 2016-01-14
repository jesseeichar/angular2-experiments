import {Injectable} from "angular2/core";
import {Store} from "./store";

export class LocalStorageStore implements Store {
  containsKey(key: string): boolean {
    if (localStorage.getItem(key)) {
      return true;
    }
    return false;
  }
  getItem(key: string): string {
    return localStorage.getItem(key);
  }
  getJson<T extends Object>(key: string, defaultVal:T): T {
    let data = localStorage.getItem(key);
    if (!data) {
      return defaultVal;
    }

    return <T> JSON.parse(data);
  }
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  setJson<T extends Object>(key: string, value: T): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
  clear(): void {
    localStorage.clear();
  }
  keys(): string[] {
    let keys: string[] = [];
    for (var i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i));
    }
    return keys;
  }
}