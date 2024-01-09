import { IMeditationLogs } from "./MeditationLogs";

import mockData from "../../../lib/services/database/mockData/MOCK_DATA.json";

const base: IMeditationLogs = {
  storedData: mockData,
  deleteAll: () => {},
  downloadJson: () => {},
  uploadJson: () => {},
};

export const mockMeditationLogsProps = {
  base,
};
