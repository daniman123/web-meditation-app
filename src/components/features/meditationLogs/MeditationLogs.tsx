// MeditationLogs.tsx
import { MeditationLogList } from "@/components/ui/meditationLogList/MeditationLogList";
import { useFileHandlers } from "@/lib/hooks/useFileHandlers";
import { ILocalStorageData } from "@/lib/services/database/types";
import React from "react";

export interface IMeditationLogs {
  storedData: ILocalStorageData[] | undefined;
  deleteAll: () => void;
  downloadJson: () => void;
  uploadJson: (_event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Component to manage and display meditation logs.
 */
const MeditationLogs: React.FC<IMeditationLogs> = ({
  storedData,
  deleteAll,
  downloadJson,
  uploadJson,
}) => {
  const fileHandlers = useFileHandlers(downloadJson, uploadJson);

  if (!storedData || storedData.length === 0) {
    return <div>No meditation logs found.</div>;
  }

  return (
    <div>
      <MeditationLogList storedData={storedData} />
      <button
        onClick={deleteAll}
        className="bg-emerald-600 p-2 rounded-3xl text-white font-semibold"
      >
        Delete All Logs
      </button>
      <div className="flex">
        <label>
          Import Data
          <input type="file" onChange={fileHandlers.uploadJson} />
        </label>
        <button onClick={fileHandlers.downloadJson} className="bg-emerald-400">
          Export Data
        </button>
      </div>
    </div>
  );
};

export default React.memo(MeditationLogs);
