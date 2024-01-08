import { SetStateAction } from "react";
import { IRenderDurationOptions } from "./RenderDurationOptions";

const base: IRenderDurationOptions = {
  setSrc: setSrc,
  speaker: "",
  category: "",
};

export const mockRenderDurationOptionsProps = {
  base,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setSrc(_value: SetStateAction<string | undefined>): void {
  throw new Error("Function not implemented.");
}
