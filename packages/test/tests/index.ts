import { apiClient } from "./testClient";

async function test(){
    const messages = await apiClient.usersById("").outlook.masterCategories.get();
    console.log(messages);
}

test().then(() => console.log("done"));