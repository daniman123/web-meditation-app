"use client";

import { ILocalStorageData } from "@/lib/services/database/types";
import {
  formatDateTime,
  getFromLocalStorage,
} from "@/lib/services/database/utils";
import { Fragment, useEffect, useState } from "react";

export interface ISettingsPage {}

const SettingsPage = () => {
  const [storedData, setStoredData] = useState<
    ILocalStorageData[] | undefined
  >();

  useEffect(() => {
    const allData = getFromLocalStorage("meditationsLog");
    setStoredData(allData);
  }, []);

  // const deleteItem = (key) => {
  //   localStorage.removeItem(key);
  //   const updatedData = { ...storedData };
  //   delete updatedData[key];
  //   setStoredData(updatedData);
  // };

  const deleteAll = () => {
    localStorage.clear();
    setStoredData([]);
  };

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
                  {Math.ceil(value.duration / 60)} m.
                </p>
              </div>
            </Fragment>
          ))}
      </div>
    );
  };

  return (
    <div className="h-[100dvh] w-[100dvw] grid grid-flow-row auto-rows-auto">
      {renderData()}
      <button
        onClick={() => deleteAll()}
        className=" bg-emerald-600 p-2 rounded-3xl text-white font-semibold"
      >
        Delete All Logs
      </button>
    </div>
  );
};

export default SettingsPage;
