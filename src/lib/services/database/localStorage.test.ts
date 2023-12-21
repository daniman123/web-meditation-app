describe("LocalStorage Operations", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should store a value of type array in LocalStorage", () => {
    const key = "testKey";
    const value = ["testValue"];

    // Example function that uses localStorage
    function saveToLocalStorage(key: string, value: string[]) {
      localStorage.setItem(key, JSON.stringify(value)); // Serialize the value
    }

    function getFromLocalStorage(key: string) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null; // Deserialize the value
    }

    saveToLocalStorage(key, value);
    const storedValue = getFromLocalStorage(key);

    expect(storedValue).toEqual(value); // Use toEqual for array or object comparison
  });
});
