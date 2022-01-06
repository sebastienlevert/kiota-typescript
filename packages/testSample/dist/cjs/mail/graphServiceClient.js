"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphServiceClient = void 0;
const userRequestBuilder_1 = require("./users/item/userRequestBuilder");
const usersRequestBuilder_1 = require("./users/usersRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
const kiota_serialization_json_1 = require("@microsoft/kiota-serialization-json");
/** The main entry point of the SDK, exposes the configuration and the fluent API.  */
class GraphServiceClient {
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
        (0, kiota_abstractions_1.registerDefaultSerializer)(kiota_serialization_json_1.JsonSerializationWriterFactory);
        (0, kiota_abstractions_1.registerDefaultDeserializer)(kiota_serialization_json_1.JsonParseNodeFactory);
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    }
    get users() {
        return new usersRequestBuilder_1.UsersRequestBuilder(this.pathParameters, this.requestAdapter);
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
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        id && urlTplParams.set("user_id", id);
        return new userRequestBuilder_1.UserRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
}
exports.GraphServiceClient = GraphServiceClient;
//# sourceMappingURL=graphServiceClient.js.map