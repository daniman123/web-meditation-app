import dbConfig from "./db.config.json";
// import { ILocalStorageData } from "./types";
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

export interface ILocalStorageData {
  dateTime: string;
  duration: number;
}

// Function to calculate current streak of daily observations
export const calculateCurrentStreak = (data: ILocalStorageData[]): number => {
  if (data.length === 0) return 0;

  // Sort data by dateTime
  const sortedData = data.sort(
    (a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
  );

  let currentStreak = 1; // Start with 1 to include the last observation

  let previousDate = new Date(
    parseInt(sortedData[sortedData.length - 2]?.dateTime as string, 10)
  );

  // Iterate over sorted observations starting from the second item

  for (let i = 1; i < sortedData.length; i++) {
    const element = sortedData[i];
    if (!element) {
      continue;
    }
    const currentDate = new Date(parseInt(element.dateTime, 10));

    const diffInTime = currentDate.getTime() - previousDate.getTime();

    const diffInDays = diffInTime / (1000 * 3600 * 24);

    // Check if the current and previous dates are consecutive
    if (diffInDays >= 0.5 && diffInDays < 1.5) {
      currentStreak++;
    } else if (diffInDays > 1.5) {
      // Reset streak if gap is more than one day
      currentStreak = 1;
    }
    previousDate = currentDate;
  }

  // Optionally, check if the last observation was today and adjust streak accordingly
  const today = new Date();

  today.setHours(0, 0, 0, 0); // Normalize today's date to midnight for comparison

  if (previousDate < today) {
    // If the last observation wasn't today, the streak ended with the last observation
    currentStreak = 0;
  }

  return currentStreak;
};
