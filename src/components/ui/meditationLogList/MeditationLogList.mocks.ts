import mockData from "../../../lib/services/database/mockData/MOCK_DATA.json";
import { IMeditationLogList } from "./MeditationLogList";

const base: IMeditationLogList = {
  storedData: mockData,
};

export const mockMeditationLogListProps = {
  base,
};
