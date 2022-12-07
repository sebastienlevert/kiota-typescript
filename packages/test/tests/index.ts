import { apiClient } from "./testClient";

async function test(){

    const response = await apiClient.usersById("").notificationsById("").get();

}