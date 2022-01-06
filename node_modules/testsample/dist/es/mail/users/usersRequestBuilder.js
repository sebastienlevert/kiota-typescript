import { getPathParameters } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users  */
export class UsersRequestBuilder {
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
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
}
//# sourceMappingURL=usersRequestBuilder.js.map