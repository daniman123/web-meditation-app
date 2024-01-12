export const playAudio = (audio: HTMLAudioElement) => {
  audio.play().catch((error) => console.error("Error playing audio:", error));
};

export const pauseAudio = (audio: HTMLAudioElement) => {
  audio.pause();
};

export const seekAudio = (audio: HTMLAudioElement, time: number) => {
  const seekTime = Math.min((audio.duration / 100) * time, audio.duration);
  audio.currentTime = seekTime;
};
