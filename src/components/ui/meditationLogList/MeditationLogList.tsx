import { ILocalStorageData } from "@/lib/services/database/types";
import { formatDateTime } from "@/lib/services/database/utils";
import React, { Fragment } from "react";

export interface IMeditationLogList {
  storedData: ILocalStorageData[] | undefined;
}

/**
 * Component to render the list of meditation logs.
 */
export const MeditationLogList: React.FC<IMeditationLogList> = ({
  storedData,
}) => (
  <div className="max-w-full w-full">
    <div className="flex border-b">
      <p className="text-center w-1/2 font-semibold">Date:</p>
      <p className="text-center w-1/2 font-semibold">Duration:</p>
    </div>
    {storedData?.map((value, index) => (
      <Fragment key={index}>
        <div className="flex border-b">
          <p className="w-1/2 text-center text-sm">
            {formatDateTime(value.dateTime)}
          </p>
          <p className="w-1/2 text-center text-sm">
            {Math.floor(value.duration / 60)}m
          </p>
        </div>
      </Fragment>
    ))}
  </div>
);
