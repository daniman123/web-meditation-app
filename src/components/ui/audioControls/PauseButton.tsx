import Image from "next/image";
import StyledButton from "../styledButton/StyledButton";

export interface IPauseButton {
  toggleRuntime: () => Promise<void>;
}

const PauseButton = ({ toggleRuntime }: IPauseButton) => {
  return (
    <StyledButton
      wrapperStyles="flex justify-center items-center"
      buttonStyles="w-20 h-20 p-3 rounded-full text-white font-semibold"
      handleClick={toggleRuntime}
    >
      <div className="relative w-full h-full bg-white rounded-full">
        <Image
          alt=""
          src={"/pause-button.svg"}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </StyledButton>
  );
};

export default PauseButton;
