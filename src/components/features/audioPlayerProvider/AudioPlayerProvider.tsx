import useAudioPlayer from "@/lib/hooks/useAudioPlayer";
import React, { createContext, useContext } from "react";

export interface IAudioPlayerProvider {
  children: React.ReactNode;
}

export interface AudioPlayerContextType {
  togglePlayPause: () => Promise<void>;
  progress: number;
  duration: number;
  isPlaying: boolean;
  isPaused: boolean;
  toggleRuntime: () => Promise<void>;
  setSrc: React.Dispatch<React.SetStateAction<string | undefined>>;
  category: string | undefined;
  setCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
  speaker: string | undefined;
  setSpeaker: React.Dispatch<React.SetStateAction<string | undefined>>;
  resetAudioPlayer: () => void
}

const AudioPlayerContext = createContext<AudioPlayerContextType | null>(null);

export const useAudioPlayerContext = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayerContext must be used within a AudioPlayerProvider');
  }
  return context;
};


export const AudioPlayerProvider = ({ children }: IAudioPlayerProvider) => {
  const audioPlayer = useAudioPlayer();

  return (
    <AudioPlayerContext.Provider value={audioPlayer}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
