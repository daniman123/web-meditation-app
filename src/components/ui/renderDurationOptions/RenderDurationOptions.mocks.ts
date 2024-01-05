import { SetStateAction } from "react";
import audioFileRoutesData from "../../../lib/services/audioFileManager/audioRoutes.json";
import { IRenderDurationOptions } from "./RenderDurationOptions";

const base: IRenderDurationOptions = {
  audioFileRoutes: audioFileRoutesData,
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
