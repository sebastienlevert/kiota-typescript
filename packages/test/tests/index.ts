import { apiClient } from "./testClient";

async function test(){

    const response = await apiClient.store.order.post({ id : 123});

}