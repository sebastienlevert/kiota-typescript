import { RestClient, RequestAdapter } from "@microsoft/kiota-abstractions"
import { APIs } from "../restGenerated/apis";

export type ClientWithValues = RestClient &{
    api:APIs;
}
interface RestClientConstructor
{
    new(requestAdapter:RequestAdapter):ClientWithValues;
}


export const ApiClient= function(this:ClientWithValues, requestAdapter:RequestAdapter){
    this.api = ((api:string)=>{
        return requestAdapter.api(api);
    }) as any;
} as any as RestClientConstructor;

//const  s = new ApiClient(null);

