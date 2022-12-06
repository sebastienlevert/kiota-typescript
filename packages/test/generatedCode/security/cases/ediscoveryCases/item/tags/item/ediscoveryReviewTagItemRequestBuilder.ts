import {ODataError} from '../../../../../../models/oDataErrors/oDataError';
import {deserializeIntoEdiscoveryReviewTag} from '../../../../../../models/security/deserializeIntoEdiscoveryReviewTag';
import {EdiscoveryReviewTag} from '../../../../../../models/security/ediscoveryReviewTag';
import {serializeEdiscoveryReviewTag} from '../../../../../../models/security/serializeEdiscoveryReviewTag';
import {ChildTagsRequestBuilder} from './childTags/childTagsRequestBuilder';
import {EdiscoveryReviewTagItemRequestBuilder as i88e040d91132dcc27c0dd3bd5b3812c1d2a50e238896275546e134de11bc45cd} from './childTags/item/ediscoveryReviewTagItemRequestBuilder';
import {EdiscoveryReviewTagItemRequestBuilderDeleteRequestConfiguration} from './ediscoveryReviewTagItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoveryReviewTagItemRequestBuilderGetRequestConfiguration} from './ediscoveryReviewTagItemRequestBuilderGetRequestConfiguration';
import {EdiscoveryReviewTagItemRequestBuilderPatchRequestConfiguration} from './ediscoveryReviewTagItemRequestBuilderPatchRequestConfiguration';
import {ParentRequestBuilder} from './parent/parentRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the tags property of the microsoft.graph.security.ediscoveryCase entity. */
export class EdiscoveryReviewTagItemRequestBuilder {
    /** Provides operations to manage the childTags property of the microsoft.graph.security.ediscoveryReviewTag entity. */
    public get childTags(): ChildTagsRequestBuilder {
        return new ChildTagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the parent property of the microsoft.graph.security.ediscoveryReviewTag entity. */
    public get parent(): ParentRequestBuilder {
        return new ParentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the childTags property of the microsoft.graph.security.ediscoveryReviewTag entity.
     * @param id Unique identifier of the item
     * @returns a EdiscoveryReviewTagItemRequestBuilder
     */
    public childTagsById(id: string) : i88e040d91132dcc27c0dd3bd5b3812c1d2a50e238896275546e134de11bc45cd {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryReviewTag%2Did1"] = id
        return new i88e040d91132dcc27c0dd3bd5b3812c1d2a50e238896275546e134de11bc45cd(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EdiscoveryReviewTagItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/tags/{ediscoveryReviewTag%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property tags for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a list of ediscoveryReviewTag objects associated to this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property tags in security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EdiscoveryReviewTag | undefined, requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoveryReviewTag);
        return requestInfo;
    };
    /**
     * Delete navigation property tags for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Returns a list of ediscoveryReviewTag objects associated to this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewTag
     */
    public get(requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewTag | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryReviewTag>(requestInfo,deserializeIntoEdiscoveryReviewTag, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property tags in security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewTag
     */
    public patch(body: EdiscoveryReviewTag | undefined, requestConfiguration?: EdiscoveryReviewTagItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewTag | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryReviewTag>(requestInfo,deserializeIntoEdiscoveryReviewTag, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
