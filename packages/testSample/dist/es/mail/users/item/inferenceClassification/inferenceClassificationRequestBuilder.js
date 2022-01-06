import { InferenceClassification } from '../../../models/microsoft/graph/inferenceClassification';
import { InferenceClassificationOverrideRequestBuilder } from './overrides/item/inferenceClassificationOverrideRequestBuilder';
import { OverridesRequestBuilder } from './overrides/overridesRequestBuilder';
import { getPathParameters, HttpMethod, RequestInformation } from '@microsoft/kiota-abstractions';
/** Builds and executes requests for operations under /users/{user-id}/inferenceClassification  */
export class InferenceClassificationRequestBuilder {
    /**
     * Instantiates a new InferenceClassificationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user_id}/inferenceClassification{?select}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    get overrides() {
        return new OverridesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    ;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createDeleteRequestInformation(h, o) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    }
    ;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    createGetRequestInformation(q, h, o) {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    }
    ;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    createPatchRequestInformation(body, h, o) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    }
    ;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    delete(h, o, responseHandler) {
        var _a, _b;
        const requestInfo = this.createDeleteRequestInformation(h, o);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    }
    ;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of InferenceClassification
     */
    get(q, h, o, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(q, h, o);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, InferenceClassification, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    }
    ;
    /**
     * Gets an item from the MicrosoftGraph.users.item.inferenceClassification.overrides.item collection
     * @param id Unique identifier of the item
     * @returns a inferenceClassificationOverrideRequestBuilder
     */
    overridesById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("inferenceClassificationOverride_id", id);
        return new InferenceClassificationOverrideRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param body
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    patch(body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(body, h, o);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    }
    ;
}
//# sourceMappingURL=inferenceClassificationRequestBuilder.js.map