"use client";

import { Provider } from "react-redux";
import store from "./store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {/* <QueryClientProvider client={queryClient}> */}
      {children}
      {/* </QueryClientProvider> */}
    </Provider>
  );
};

export default Providers;
