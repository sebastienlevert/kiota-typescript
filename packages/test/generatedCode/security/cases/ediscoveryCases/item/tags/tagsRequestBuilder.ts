import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {deserializeIntoEdiscoveryReviewTag} from '../../../../../models/security/deserializeIntoEdiscoveryReviewTag';
import {deserializeIntoEdiscoveryReviewTagCollectionResponse} from '../../../../../models/security/deserializeIntoEdiscoveryReviewTagCollectionResponse';
import {EdiscoveryReviewTag} from '../../../../../models/security/ediscoveryReviewTag';
import {EdiscoveryReviewTagCollectionResponse} from '../../../../../models/security/ediscoveryReviewTagCollectionResponse';
import {serializeEdiscoveryReviewTag} from '../../../../../models/security/serializeEdiscoveryReviewTag';
import {serializeEdiscoveryReviewTagCollectionResponse} from '../../../../../models/security/serializeEdiscoveryReviewTagCollectionResponse';
import {AsHierarchyRequestBuilder} from './asHierarchy/asHierarchyRequestBuilder';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TagsRequestBuilderGetRequestConfiguration} from './tagsRequestBuilderGetRequestConfiguration';
import {TagsRequestBuilderPostRequestConfiguration} from './tagsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the tags property of the microsoft.graph.security.ediscoveryCase entity. */
export class TagsRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to call the asHierarchy method.
     * @returns a asHierarchyRequestBuilder
     */
    public asHierarchy() : AsHierarchyRequestBuilder {
        return new AsHierarchyRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Instantiates a new TagsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/tags{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get a list of eDiscoveryReviewTag objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: TagsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new ediscoveryReviewTag object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: EdiscoveryReviewTag | undefined, requestConfiguration?: TagsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoveryReviewTag);
        return requestInfo;
    };
    /**
     * Get a list of eDiscoveryReviewTag objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewTagCollectionResponse
     */
    public get(requestConfiguration?: TagsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewTagCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryReviewTagCollectionResponse>(requestInfo,deserializeIntoEdiscoveryReviewTagCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new ediscoveryReviewTag object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewTag
     */
    public post(body: EdiscoveryReviewTag | undefined, requestConfiguration?: TagsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewTag | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryReviewTag>(requestInfo,deserializeIntoEdiscoveryReviewTag, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
