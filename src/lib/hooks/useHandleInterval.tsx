import { useEffect } from "react";

const useHandleInterval = (
  isActive: boolean,
  updateSeconds: () => void,
  isRuntimePaused: boolean
) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    let interval: NodeJS.Timeout;
    if (isActive && !isRuntimePaused) {
      interval = setInterval(updateSeconds, 100);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, updateSeconds, isRuntimePaused]);
};

export default useHandleInterval;
