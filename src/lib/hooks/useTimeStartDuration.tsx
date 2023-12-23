import { useEffect, useState } from "react";

const useTimeStartDuration = (isActive: boolean, duration: number) => {
  const [loggedStartDuration, setLoggedStartDuration] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (!isActive) {
      setLoggedStartDuration(duration);
    }
  }, [duration, isActive]);

  return loggedStartDuration;
};

export default useTimeStartDuration;
