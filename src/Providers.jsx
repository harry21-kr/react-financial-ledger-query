import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import router from "./routes/router";
import store from "./store/store";

const queryClient = new QueryClient();

const Providers = () => {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AuthProvider>
    </ReduxProvider>
  );
};

export default Providers;
