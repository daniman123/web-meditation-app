import type { Meta } from "@storybook/react";
import React, { useState } from "react";
import { AudioSelectorContext } from "../audioContextProvider/AudioContextProvider";
import AudioPlayback from "./AudioPlayback";

export interface ImockValues {
  audioSrc: string;
  category: string;
  speaker: string;
  duration: string;
  categories: string[];
  durations: string[];
  speakers: string[];
}

const MockAudioContextProvider = ({
  children,
  mockValues,
}: {
  children: React.ReactNode;
  mockValues: ImockValues;
}) => {
  const [audioSrc, setAudioSrc] = useState(mockValues.audioSrc || "");
  const [category, setCategory] = useState(mockValues.category || "");
  const [speaker, setSpeaker] = useState(mockValues.speaker || "");
  const [duration, setDuration] = useState(mockValues.duration || "");

  const resetSelections = () => {
    setAudioSrc("");
    setCategory("");
    setSpeaker("");
    setDuration("");
  };

  const contextValue = {
    audioSrc,
    setAudioSrc,
    category,
    setCategory,
    speaker,
    setSpeaker,
    duration,
    setDuration,
    categories: mockValues.categories || [],
    durations: mockValues.durations || [],
    speakers: mockValues.speakers || [],
    resetSelections,
  };

  return (
    <AudioSelectorContext.Provider value={contextValue}>
      {children}
    </AudioSelectorContext.Provider>
  );
};

const meta: Meta<typeof AudioPlayback> = {
  title: "features/AudioPlayback",
  component: AudioPlayback,
};

export default meta;

export const Base = () => (
  <MockAudioContextProvider
    mockValues={{
      audioSrc: "/singing-bowl.wav",
      categories: [""],
      speakers: [""],
      durations: [""],
      category: "",
      duration: "",
      speaker: "",
    }}
  >
    <AudioPlayback />
  </MockAudioContextProvider>
);
