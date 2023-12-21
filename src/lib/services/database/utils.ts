import { ILocalStorageData } from "./types";

export function getFromLocalStorage(key: string) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : [];
}

export function saveToLocalStorage(key: string, value: ILocalStorageData[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const resetLocalStorage = (key: string) => {
  localStorage.setItem(key, JSON.stringify([]));
};
