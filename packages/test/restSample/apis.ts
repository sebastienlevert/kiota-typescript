import { RestRequest } from "../../abstractions/src";

export interface APIs{
    (api:"/me"):{
        get:()=>Promise<unknown>;
    };
    (api:"/me/Messages"):{
        get:()=>Promise<unknown>;
    };
    (api:"/users"):{
        get:()=>Promise<unknown>;
    };
    (api:"/users/{userId}"):{
        get:()=>Promise<unknown>;
    }; // user-id => change from user-id to userId
}