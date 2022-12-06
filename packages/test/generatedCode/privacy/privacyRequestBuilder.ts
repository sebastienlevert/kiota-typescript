import {deserializeIntoPrivacy} from '../models/deserializeIntoPrivacy';
import {ODataError} from '../models/oDataErrors/oDataError';
import {Privacy} from '../models/privacy';
import {serializePrivacy} from '../models/serializePrivacy';
import {PrivacyRequestBuilderGetRequestConfiguration} from './privacyRequestBuilderGetRequestConfiguration';
import {PrivacyRequestBuilderPatchRequestConfiguration} from './privacyRequestBuilderPatchRequestConfiguration';
import {SubjectRightsRequestItemRequestBuilder} from './subjectRightsRequests/item/subjectRightsRequestItemRequestBuilder';
import {SubjectRightsRequestsRequestBuilder} from './subjectRightsRequests/subjectRightsRequestsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the privacy singleton. */
export class PrivacyRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the subjectRightsRequests property of the microsoft.graph.privacy entity. */
    public get subjectRightsRequests(): SubjectRightsRequestsRequestBuilder {
        return new SubjectRightsRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new PrivacyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/privacy{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get privacy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: PrivacyRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update privacy
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Privacy | undefined, requestConfiguration?: PrivacyRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePrivacy);
        return requestInfo;
    };
    /**
     * Get privacy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Privacy
     */
    public get(requestConfiguration?: PrivacyRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Privacy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Privacy>(requestInfo,deserializeIntoPrivacy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update privacy
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Privacy
     */
    public patch(body: Privacy | undefined, requestConfiguration?: PrivacyRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Privacy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Privacy>(requestInfo,deserializeIntoPrivacy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the subjectRightsRequests property of the microsoft.graph.privacy entity.
     * @param id Unique identifier of the item
     * @returns a SubjectRightsRequestItemRequestBuilder
     */
    public subjectRightsRequestsById(id: string) : SubjectRightsRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subjectRightsRequest%2Did"] = id
        return new SubjectRightsRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
