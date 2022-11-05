import React, { createContext, PropsWithChildren, useContext } from 'react';
import { RootStore } from './RootStore';

const StoreContext = createContext<RootStore>({} as RootStore);

export const useStore = () => useContext<RootStore>(StoreContext);

interface StoreProviderProps extends PropsWithChildren {
  store?: RootStore;
}

const defaultStore = new RootStore();

export const StoreProvider: React.FC<StoreProviderProps> = ({
  store,
  children,
}) => (
  <StoreContext.Provider value={store ?? defaultStore}>
    {children}
  </StoreContext.Provider>
);
