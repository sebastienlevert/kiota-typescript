import {MicrosoftGraphAdmin, MicrosoftGraphServiceHealth, MicrosoftGraphServiceAnnouncement, MicrosoftGraphServiceHealthCollectionResponse} from "./models";

interface QueryOptions{}
interface GraphRequestCallback{}

export interface operation1{
   get(headers?: Record<string, string>, oDataQueryOptions?: QueryOptions, callback?: GraphRequestCallback):Promise<MicrosoftGraphAdmin>
   patch(requestBody:MicrosoftGraphAdmin, headers: Record<string, string>, callback?: GraphRequestCallback):Promise<MicrosoftGraphAdmin>
}
export interface operation2{
   get(headers?: Record<string, string>, oDataQueryOptions?: QueryOptions, callback?: GraphRequestCallback):Promise<MicrosoftGraphServiceAnnouncement>
   patch(requestBody:MicrosoftGraphServiceAnnouncement, headers: Record<string, string>, callback?: GraphRequestCallback):Promise<MicrosoftGraphServiceAnnouncement>
   delete( headers: Record<string, string>, callback?: GraphRequestCallback):Promise<"Success">
}
export interface operation3{
   get(headers?: Record<string, string>, oDataQueryOptions?: QueryOptions, callback?: GraphRequestCallback):Promise<MicrosoftGraphServiceHealthCollectionResponse>
   post(requestBody:MicrosoftGraphServiceHealth, headers: Record<string, string>, callback?: GraphRequestCallback):Promise<MicrosoftGraphServiceHealth>
}
export interface operation4{
   get(headers?: Record<string, string>, oDataQueryOptions?: QueryOptions, callback?: GraphRequestCallback):Promise<MicrosoftGraphServiceHealth>
   patch(requestBody:MicrosoftGraphServiceHealth, headers: Record<string, string>, callback?: GraphRequestCallback):Promise<MicrosoftGraphServiceHealth>
   delete( headers: Record<string, string>, callback?: GraphRequestCallback):Promise<"Success">
}