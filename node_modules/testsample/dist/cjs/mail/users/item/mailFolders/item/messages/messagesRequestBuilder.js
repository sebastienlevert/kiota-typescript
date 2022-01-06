"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesRequestBuilder = void 0;
const message_1 = require("../../../../../models/microsoft/graph/message");
const messagesResponse_1 = require("./messagesResponse");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/messages  */
class MessagesRequestBuilder {
    /**
     * Instantiates a new MessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user_id}/mailFolders/{mailFolder_id}/messages{?top,skip,search,filter,count,orderby,select,expand}";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    /**
     * The collection of messages in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    createGetRequestInformation(q, h, o) {
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    }
    ;
    /**
     * The collection of messages in the mailFolder.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPostRequestInformation(body, h, o) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.POST;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    }
    ;
    /**
     * The collection of messages in the mailFolder.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MessagesResponse
     */
    get(q, h, o, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(q, h, o);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, messagesResponse_1.MessagesResponse, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    }
    ;
    /**
     * The collection of messages in the mailFolder.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Message
     */
    post(body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(body, h, o);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, message_1.Message, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    }
    ;
}
exports.MessagesRequestBuilder = MessagesRequestBuilder;
//# sourceMappingURL=messagesRequestBuilder.js.map