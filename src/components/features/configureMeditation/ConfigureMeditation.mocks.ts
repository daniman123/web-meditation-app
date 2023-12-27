import { IConfigureMeditation } from "./ConfigureMeditation";

const base: IConfigureMeditation = {
  audioFileRoutes: {},
  isPaused: false,
  isPlaying: false,
  setSpeaker: () => {},
  setSrc: () => {},
  speaker: "",
  togglePlayPause: async () => {},
};

export const mockConfigureMeditationProps = {
  base,
};
