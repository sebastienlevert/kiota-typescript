import {ODataError} from '../../../../../../../../models/oDataErrors/oDataError';
import {deserializeIntoEdiscoveryReviewSetQuery} from '../../../../../../../../models/security/deserializeIntoEdiscoveryReviewSetQuery';
import {EdiscoveryReviewSetQuery} from '../../../../../../../../models/security/ediscoveryReviewSetQuery';
import {serializeEdiscoveryReviewSetQuery} from '../../../../../../../../models/security/serializeEdiscoveryReviewSetQuery';
import {ApplyTagsRequestBuilder} from './applyTags/applyTagsRequestBuilder';
import {EdiscoveryReviewSetQueryItemRequestBuilderDeleteRequestConfiguration} from './ediscoveryReviewSetQueryItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoveryReviewSetQueryItemRequestBuilderGetRequestConfiguration} from './ediscoveryReviewSetQueryItemRequestBuilderGetRequestConfiguration';
import {EdiscoveryReviewSetQueryItemRequestBuilderPatchRequestConfiguration} from './ediscoveryReviewSetQueryItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the queries property of the microsoft.graph.security.ediscoveryReviewSet entity. */
export class EdiscoveryReviewSetQueryItemRequestBuilder {
    /** Provides operations to call the applyTags method. */
    public get applyTags(): ApplyTagsRequestBuilder {
        return new ApplyTagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new EdiscoveryReviewSetQueryItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/reviewSets/{ediscoveryReviewSet%2Did}/queries/{ediscoveryReviewSetQuery%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property queries for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Represents queries within the review set.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property queries in security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EdiscoveryReviewSetQuery | undefined, requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoveryReviewSetQuery);
        return requestInfo;
    };
    /**
     * Delete navigation property queries for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Represents queries within the review set.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewSetQuery
     */
    public get(requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewSetQuery | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryReviewSetQuery>(requestInfo,deserializeIntoEdiscoveryReviewSetQuery, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property queries in security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewSetQuery
     */
    public patch(body: EdiscoveryReviewSetQuery | undefined, requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewSetQuery | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryReviewSetQuery>(requestInfo,deserializeIntoEdiscoveryReviewSetQuery, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
