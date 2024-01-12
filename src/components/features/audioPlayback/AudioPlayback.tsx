import PlayBackDisplay from "@/components/ui/playBackDisplay/PlayBackDisplay";
import PlayPauseButton from "@/components/ui/playPauseButton/PlayPauseButton";
import useAudioPlayback from "@/lib/hooks/useAudioPlayback/useAudioPlayback";

export interface IAudioPlayback {
  src: string;
}

const AudioPlayback = ({ src }: IAudioPlayback) => {
  const { currentTime, duration, handleSeek, isPlaying, togglePlayPause } =
    useAudioPlayback(src);

  return (
    <div className="grid p-5">
      <PlayPauseButton
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
      />

      <PlayBackDisplay
        currentTime={currentTime}
        duration={duration}
        handleSeek={handleSeek}
      />
    </div>
  );
};

export default AudioPlayback;
