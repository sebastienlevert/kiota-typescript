import { UserRequestBuilder } from './users/item/userRequestBuilder';
import { UsersRequestBuilder } from './users/usersRequestBuilder';
import { getPathParameters, registerDefaultDeserializer, registerDefaultSerializer } from '@microsoft/kiota-abstractions';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
/** The main entry point of the SDK, exposes the configuration and the fluent API.  */
export class GraphServiceClient {
    /**
     * Instantiates a new GraphServiceClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(requestAdapter) {
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.pathParameters = new Map();
        this.urlTemplate = "{+baseurl}";
        this.requestAdapter = requestAdapter;
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    }
    get users() {
        return new UsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.item collection
     * @param id Unique identifier of the item
     * @returns a userRequestBuilder
     */
    usersById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("user_id", id);
        return new UserRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
}
//# sourceMappingURL=graphServiceClient.js.map