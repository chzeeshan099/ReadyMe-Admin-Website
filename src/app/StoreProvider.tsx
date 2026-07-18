"use client"
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { makeStore, AppStore } from '@/../src/reducer/store';
import { configureInterceptors } from '@/config/request';
import { useRouter } from 'next/navigation';

export default function StoreProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const router: any = useRouter();
  configureInterceptors(router);

  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current.store}>
      <PersistGate loading={null} persistor={storeRef.current.persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
