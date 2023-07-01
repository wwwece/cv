type StorageKey = 'employer' | 'sessionID';

interface StorageProps {
  key: StorageKey;
}

interface WriteStorage extends StorageProps {
  value?: string | null;
}

export const Storage = {
  write: ({ key, value }: WriteStorage) => {
    if (window.sessionStorage) window.sessionStorage.setItem(key, value ?? '');
  },
  read: ({ key }: StorageProps) => {
    if (window.sessionStorage)
      return window.sessionStorage.getItem(key) ?? undefined;
  },
};
