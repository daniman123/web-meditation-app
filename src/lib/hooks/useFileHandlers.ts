import React from "react";

/**
 * Custom hook to encapsulate logic for downloading and uploading JSON data.
 */
export const useFileHandlers = (
  downloadJson: () => void,
  uploadJson: (_event: React.ChangeEvent<HTMLInputElement>) => void
) => {
  return { downloadJson, uploadJson };
};
