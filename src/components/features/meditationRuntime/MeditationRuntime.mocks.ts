import { IMeditationRuntime } from "./MeditationRuntime";

const base: IMeditationRuntime = {
  duration: 15,
  progress: 0,
  toggleRuntime: async () => {},
  resetAudioPlayer: () => {},
  isPaused: true,
};

export const mockMeditationRuntimeProps = {
  base,
};
