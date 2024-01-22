import StyledButton from "@/components/ui/styledButton/StyledButton";
import React from "react";

interface IRenderArray {
  dataArray: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const RenderArray: React.FC<IRenderArray> = React.memo(
  ({ dataArray, setValue }) =>
    dataArray.map((value) => (
      <StyledButton
        key={value}
        wrapperStyles="flex justify-center"
        buttonStyles="w-28 p-2 rounded-3xl bg-emerald-500 text-white opacity-90 hover:opacity-100 transition-opacity"
        buttonLabel={value}
        handleClick={() => setValue(value)}
      />
    ))
);
RenderArray.displayName = "RenderArray";
export default RenderArray;
