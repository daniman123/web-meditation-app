import { ILocalStorageData } from "@/lib/services/database/types";
import { formatDateTime } from "@/lib/services/database/utils";
import { Fragment } from "react";

export interface IMeditationLogs {
  storedData: ILocalStorageData[] | undefined;
  deleteAll: () => void;
  downloadJson: () => void;
  uploadJson: (_event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MeditationLogs = ({
  storedData,
  deleteAll,
  downloadJson,
  uploadJson,
}: IMeditationLogs) => {
  const renderData = () => {
    return (
      <div className="max-w-full w-full">
        <div className="flex border-b">
          <p className="text-center w-1/2  font-semibold">Date:</p>
          <p className="text-center w-1/2 font-semibold">Duration:</p>
        </div>

        {storedData &&
          storedData.map((value, index) => (
            <Fragment key={index}>
              <div className="flex border-b">
                <p className=" w-1/2 text-center text-sm">
                  {formatDateTime(value.dateTime)}
                </p>
                <p className="w-1/2 text-center text-sm">
                  {Math.floor(value.duration / 60)}m.
                </p>
              </div>
            </Fragment>
          ))}
      </div>
    );
  };
  return (
    <div className="">
      {renderData()}
      <button
        onClick={deleteAll}
        className=" bg-emerald-600 p-2 rounded-3xl text-white font-semibold"
      >
        Delete All Logs
      </button>
      <div className="flex">
        <label>
          Import Data
          <input type="file" name="upload" id="" onChange={uploadJson} />
        </label>
        <button className="bg-emerald-400" onClick={downloadJson}>
          Export Data
        </button>
      </div>
    </div>
  );
};

export default MeditationLogs;
