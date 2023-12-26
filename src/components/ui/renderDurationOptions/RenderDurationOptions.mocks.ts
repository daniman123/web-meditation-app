import { SetStateAction } from "react";
import audioFileRoutesData from "../../../lib/services/audioFileManager/audioRoutes.json";
import { IRenderDurationOptions } from "./RenderDurationOptions";

const base: IRenderDurationOptions = {
  audioFileRoutes: audioFileRoutesData,
  setSrc: setSrc,
};

export const mockRenderDurationOptionsProps = {
  base,
};

function setSrc(_value: SetStateAction<string | undefined>): void {
  throw new Error("Function not implemented.");
}