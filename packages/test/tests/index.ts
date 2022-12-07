import { apiClient } from "./testClient";
import "../generatedCode/users/item/outlook/"
import "../generatedCode/users/item/settings/index"
async function test(){

    const response = await apiClient.usersById("").settings.contactMergeSuggestions.createDeleteRequestInformation();
    //const response = await apiClient.usersById("").outlook.get();
    // console.log(response);
    // const s = response?.additionalData;
}

test().then();