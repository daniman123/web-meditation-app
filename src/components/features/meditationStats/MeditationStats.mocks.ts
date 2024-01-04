import { IMeditationStats } from "./MeditationStats";

const base: IMeditationStats = {
  totalTimeMeditated: 0,
  totalSessionsMeditated: 0,
  averageSessionLength: 0,
  averageTotalSessionsPerDay: 0,
};

const primary: IMeditationStats = {
  totalTimeMeditated: (12 * 1200) / 60,
  totalSessionsMeditated: 12,
  averageSessionLength: 1200 / 60,
  averageTotalSessionsPerDay: 3,
};

import {
  calculateTotalTimeMeditated,
  getAverageTotalSessionsPerDay,
} from "@/lib/services/database/dataBaseManager";
import mockData from "../../../lib/services/database/mockData/MOCK_DATA.json";

const totalTime = calculateTotalTimeMeditated(mockData) / 60;
const totalSessions = mockData.length;
const averageSession = totalTime / totalSessions;
const averageSessionsPerDay = getAverageTotalSessionsPerDay(mockData);

const secondary: IMeditationStats = {
  totalTimeMeditated: totalTime as number,
  totalSessionsMeditated: totalSessions,
  averageSessionLength: averageSession,
  averageTotalSessionsPerDay: averageSessionsPerDay,
};

export const mockMeditationStatsProps = {
  base,
  primary,
  secondary,
};
