import { clearMeditationLog, logMeditation } from "./dataBaseManager";
import { getFromLocalStorage } from "./utils";

describe("LocalStorage Operations", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should clear meditationsLog", () => {
    const key = "meditationsLog";

    logMeditation(60);
    logMeditation(60);

    clearMeditationLog();

    const expectedStoredValue = getFromLocalStorage(key);

    expect(expectedStoredValue).toEqual([]);
  });
});
