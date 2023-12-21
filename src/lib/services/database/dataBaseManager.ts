import dbConfig from "./db.config.json";
import { ILocalStorageData } from "./types";
import {
  getFromLocalStorage,
  resetLocalStorage,
  saveToLocalStorage,
} from "./utils";

const key = dbConfig[0].meditationsLocalStorageKey;

export const logMeditation = (duration: number) => {
  const storedValue = getFromLocalStorage(key);
  const dateTime = new Date().getTime().toString();

  const value: ILocalStorageData = {
    dateTime,
    duration,
  };

  storedValue.push(value);

  saveToLocalStorage(key, storedValue);
};

export const clearMeditationLog = () => {
  resetLocalStorage(key);
};
