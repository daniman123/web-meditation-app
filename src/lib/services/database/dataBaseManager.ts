import dbConfig from "./db.config.json";
import { ILocalStorageData } from "./types";
import {
  getFromLocalStorage,
  resetLocalStorage,
  saveToLocalStorage,
} from "./utils";

const key = dbConfig[0]?.meditationsLocalStorageKey as string;

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

const sumArray = (numbers: number[]): number => {
  return numbers.reduce((acc, current) => acc + current, 0);
};

export const calculateTotalTimeMeditated = (data: ILocalStorageData[]) => {
  const durationArray: number[] = data.map((item) => item.duration);

  return sumArray(durationArray);
};

const formatDate = (unixTimestamp: string): string => {
  const date = new Date(parseInt(unixTimestamp));
  return date.toISOString().split("T")[0] as string;
};

export const getAverageTotalSessionsPerDay = (data: ILocalStorageData[]) => {
  const sessionCounts: { [key: string]: number } = {};

  data.forEach((item) => {
    const dateKey = formatDate(item.dateTime);
    if (!sessionCounts[dateKey]) {
      sessionCounts[dateKey] = 1;
    } else {
      sessionCounts[dateKey]++;
    }
  });

  const averageSessionsPerDay =
    Object.values(sessionCounts).reduce((acc, curr) => acc + curr, 0) /
    Object.keys(sessionCounts).length;

  return averageSessionsPerDay;
};
