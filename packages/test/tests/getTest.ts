import { apiClient } from "./testClient";

import { assert } from "chai";
import { RetryHandlerOptions } from "@microsoft/kiota-http-fetchlibrary";
//import { MessagesRequestBuilderGetQueryParameters } from "../generatedCode/users/item/messages/messagesRequestBuilderGetQueryParameters";
import "../generatedCode/users/item/all";

describe("TestGet", () => {
  it("should return a test", async () => {
    //const messages = await apiClient.usersById("813956a3-4a30-4596-914f-bfd86a657a09").messages.get();
    const reports = await apiClient
      .usersById("02b1868e-37e7-4c0e-a956-846dadaab298")
      .directReports.get();

    apiClient.me.messages.get();

    apiClient.usersById("lkjsalkjdas").directReports.get();

    /*apiClient.usersById("").patch({}, {options: [
        new RetryHandlerOptions({ maxRetries: 10 })
      ]})

      apiClient.users.
    assert.isDefined(reports?.value);
    console.log(reports?.value);*/
  });
  /*it("should decode query parameters", async () => {
        const qs = {} as MessagesRequestBuilderGetQueryParameters;
        qs.select = ["subject"];
        qs.search = "test";
        qs.count = true;
        const messages = await apiClient.usersById("813956a3-4a30-4596-914f-bfd86a657a09").messages.get();
        assert.isDefined(messages?.value);
        console.log(messages?.value)
    });*/
});
