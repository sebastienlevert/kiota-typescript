import { apiClient } from "./testClient";

async function test(){

    const response = await apiClient.usersById("").notificationsById("").get();
    console.log(response);
    const s = response?.additionalData;
}

test().then();