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

export const formatDateTime = (dateTime: string): string => {
  const date = new Date(parseInt(dateTime));
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`;
};
