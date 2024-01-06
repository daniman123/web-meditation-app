import ControlButtons from "@/components/ui/audioControls/AudioControls";
import TimerDisplay from "@/components/ui/timerDisplay/TimerDisplay";
import { useAudioPlayerContext } from "../audioPlayerProvider/AudioPlayerProvider";

const MeditationRuntime = () => {
  const {
    progress,
    duration,
    isPlaying,
    isPaused,
    toggleRuntime,
    resetAudioPlayer,
  } = useAudioPlayerContext();

  return (
    <>
      {isPlaying && (
        <>
          <TimerDisplay duration={duration} progress={progress} />
          <ControlButtons
            isPaused={isPaused}
            toggleRuntime={toggleRuntime}
            resetAudioPlayer={resetAudioPlayer}
          />
        </>
      )}
    </>
  );
};

export default MeditationRuntime;
