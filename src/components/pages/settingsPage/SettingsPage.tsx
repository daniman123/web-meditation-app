"use client";

import { ILocalStorageData } from "@/lib/services/database/types";
import { formatDateTime, getFromLocalStorage } from "@/lib/services/database/utils";
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
      storedData &&
      storedData.map((value, index) => (
        <Fragment key={index}>
          <div className="flex gap-2 border-b">
            date:
            <span className="border-l">{formatDateTime(value.dateTime)}</span>
            duration:
            <span>{value.duration / 60} m.</span>
          </div>
        </Fragment>
      ))
    );
  };

  return (
    <div className="h-[100dvh] w-[100dvw] grid grid-flow-row auto-rows-auto">
      {renderData()}
      <button
        onClick={() => deleteAll()}
        className="bg-emerald-600 p-3 rounded-3xl text-white font-semibold"
      >
        Delete All Logs
      </button>
    </div>
  );
};

export default SettingsPage;
