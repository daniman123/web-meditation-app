import StyledButton from "../styledButton/StyledButton";

export interface IPlayPauseButton {
  isPlaying: boolean;
  togglePlayPause: () => void;
}

const commonStyle =
  "w-[250px] h-[250px] rounded-full bg-emerald-500 text-white opacity-95 hover:opacity-100 ease-in-out transition-opacity";
const buttonColor = "white";

const playButtonLeftPointsX = 10;
const playButtonLeftTopY = 7;
const playButtonLeftheight = 16;
const playButtonLeftBottomY = playButtonLeftTopY + playButtonLeftheight;

const playButtonRightPointX = playButtonLeftPointsX + 14;
const playButtonRightPointY = (playButtonLeftBottomY + playButtonLeftTopY) / 2;

const pauseButtonColumnsWidth = 5;
const pauseButtonColumnsHeight = 15;
const pauseButtonColumnsY = 7.5;
const pauseButtonColumnLeftX = 8.5;
const pauseButtonColumnRightX = pauseButtonColumnLeftX + 8;

const PlayPauseButton = ({ togglePlayPause, isPlaying }: IPlayPauseButton) => {
  return (
    <>
      {isPlaying ? (
        <StyledButton
          wrapperStyles="flex justify-center animate-pulse"
          buttonStyles={commonStyle}
          handleClick={togglePlayPause}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <rect
              fill={buttonColor}
              width={pauseButtonColumnsWidth}
              height={pauseButtonColumnsHeight}
              y={pauseButtonColumnsY}
              x={pauseButtonColumnLeftX}
            />
            <rect
              fill={buttonColor}
              width={pauseButtonColumnsWidth}
              height={pauseButtonColumnsHeight}
              y={pauseButtonColumnsY}
              x={pauseButtonColumnRightX}
            />
          </svg>
        </StyledButton>
      ) : (
        <StyledButton
          wrapperStyles="flex justify-center"
          buttonStyles={commonStyle}
          handleClick={togglePlayPause}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <polygon
              fill={buttonColor}
              points={`${playButtonLeftPointsX},${playButtonLeftTopY} ${playButtonLeftPointsX},${playButtonLeftBottomY} ${playButtonRightPointX},${playButtonRightPointY}`}
            />
          </svg>
        </StyledButton>
      )}
    </>
  );
};

export default PlayPauseButton;
