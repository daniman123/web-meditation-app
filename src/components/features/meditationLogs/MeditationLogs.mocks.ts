import { IMeditationLogs } from "./MeditationLogs";

import mockData from "../../../lib/services/database/mockData/MOCK_DATA.json";

const base: IMeditationLogs = {
  storedData: mockData,
  deleteAll: () => {},
};

export const mockMeditationLogsProps = {
  base,
};
