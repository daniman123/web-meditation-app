import { useState } from "react";

export const useDurationState = () => {
  const [duration, setDuration] = useState<string>("");

  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDuration(e.target.value);
  };

  return { duration, handleDurationChange };
};
