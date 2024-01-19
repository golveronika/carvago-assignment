export const safeParseJson = (value: string | undefined | null) => {
  if (value == null) return undefined;

  try {
    return JSON.parse(value);
  } catch {
    return undefined;
  }
};

const storageAvailable = (type: string) => {
  try {
    // @ts-ignore
    const storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
};

const getFromLocalStorage = (key: string) => {
  const data = storageAvailable('localStorage') ? window.localStorage.getItem(key) : null;

  return safeParseJson(data);
};

const setToLocalStorage = async (key: string, value: any) => {
  if (storageAvailable('localStorage')) {
    await window.localStorage.setItem(key, JSON.stringify(value));
  }
};

const clearLocalStorage = () => {
  if (storageAvailable('localStorage')) {
    window.localStorage.clear();
  }
};

export {getFromLocalStorage, setToLocalStorage, clearLocalStorage};
