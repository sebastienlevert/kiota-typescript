import { ApiClient } from "../generatedCode/apiClient";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { SimpleAuthenticationProvider } from "./SimpleAuthentication/SimpleAuthenticationProvider";

const authProvider = new SimpleAuthenticationProvider(async () => {
  return "";
});

const fetchRequestAdapter = new FetchRequestAdapter(authProvider);
export const apiClient = new ApiClient(fetchRequestAdapter);
