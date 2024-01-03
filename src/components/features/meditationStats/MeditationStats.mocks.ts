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

export const mockMeditationStatsProps = {
  base,
  primary,
};
