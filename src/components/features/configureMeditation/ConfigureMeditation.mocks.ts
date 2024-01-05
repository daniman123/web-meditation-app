import { IConfigureMeditation } from "./ConfigureMeditation";

const base: IConfigureMeditation = {
  audioFileRoutes: {},
  isPaused: false,
  isPlaying: false,
  setSpeaker: () => {},
  setSrc: () => {},
  speaker: "",
  togglePlayPause: async () => {},
  category: "",
  setCategory: () => {},
};

export const mockConfigureMeditationProps = {
  base,
};
