// "use client";

// import { makeStore } from "@/store/store";
// import { useRef } from "react";
// import { Provider } from "react-redux";

// export default function StoreProvider({ children }) {
//   const storeRef = useRef(null);
//   if (!storeRef.current) {
//     storeRef.current = makeStore();
//   }
//   return <Provider store={storeRef.current}>{children}</Provider>;
// }


"use client";

import { persistor, store } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
