import { Fragment, useEffect } from "react";

import { IaudioRoutesData } from "@/lib/services/audioFileManager/types";
import audioFileRoutesData from "../../../lib/services/audioFileManager/audioRoutes.json";

export interface IRenderDurationOptions {
  setSrc: React.Dispatch<React.SetStateAction<string | undefined>>;
  speaker: string;
  category: string;
}

const audioFileRoutes: IaudioRoutesData =
  audioFileRoutesData as IaudioRoutesData;

export const Options = ({ value }: { value: string }) => {
  return <option value={value}>{value}min</option>;
};

const RenderDurationOptions = ({
  setSrc,
  speaker,
  category,
}: IRenderDurationOptions) => {
  useEffect(() => {
    const audioSrc = audioFileRoutes[speaker]?.[category]?.["15"]?.src ?? "";

    setSrc(audioSrc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dataKey = e.target.value;

    const audioSrc = audioFileRoutes[speaker]?.[category]?.[dataKey]?.src ?? "";

    setSrc(audioSrc);
  };

  return (
    <div className="w-full flex justify-center items-center p-5 h-48">
      <select
        name="time-values"
        id=""
        onChange={handleOptionChange}
        className="w-1/2 h-10 shadow-2xl relative outline-none bg-black/20 rounded"
      >
        {Object.keys(audioFileRoutes[speaker]?.[category] ?? {}).map(
          (value, i) => (
            <Fragment key={i}>
              <Options value={value} />
            </Fragment>
          )
        )}
      </select>
    </div>
  );
};

export default RenderDurationOptions;
