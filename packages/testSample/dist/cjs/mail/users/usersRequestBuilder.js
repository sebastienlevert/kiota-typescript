"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRequestBuilder = void 0;
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /users  */
class UsersRequestBuilder {
    /**
     * Instantiates a new UsersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
}
exports.UsersRequestBuilder = UsersRequestBuilder;
//# sourceMappingURL=usersRequestBuilder.js.map