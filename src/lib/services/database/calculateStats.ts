import { ILocalStorageData } from "./types";

/**
 * Sorts data entries by date.
 */
function sortDataByDate(data: ILocalStorageData[]): ILocalStorageData[] {
  return [...data].sort(
    (a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
  );
}

/**
 * Calculates the difference in days between two dates.
 */
function getDifferenceInDays(date1: Date, date2: Date): number {
  return (date1.getTime() - date2.getTime()) / (10000 * 3600 * 24);
}

/**
 * Resets time part of the date for accurate day comparison.
 */
function resetTime(date: Date): Date {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

/**
 * Main function to calculate the current streak.
 */
export const calculateCurrentStreak = (data: ILocalStorageData[]): number => {
  if (data.length === 0) return 0;

  const sortedData = sortDataByDate(data);

  let currentStreak = 0;

  const today = new Date();

  for (let i = sortedData.length - 1; i >= 0; i--) {
    const element = sortedData[i];
    const currentDate = new Date(parseInt(element?.dateTime as string, 10));

    if (i > 0) {
      const ele = sortedData[i - 1];
      if (!ele) continue;
      const previousDate = resetTime(new Date(parseInt(ele.dateTime, 10)));
      const diffInDays = getDifferenceInDays(currentDate, previousDate);

      if (diffInDays >= 1) break; // Streak ends if gap is more than a day
      currentStreak++;
    } else {
      // Handle the case for the last (earliest) entry
      const diffToToday = getDifferenceInDays(today, currentDate);
      if (diffToToday <= 1) currentStreak++;
    }
  }

  return currentStreak === 0 ? 0 : currentStreak + 1;
};
