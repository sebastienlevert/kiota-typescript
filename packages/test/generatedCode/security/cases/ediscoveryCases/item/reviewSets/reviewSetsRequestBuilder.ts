import {ODataError} from '../../../../../models/oDataErrors/oDataError';
import {deserializeIntoEdiscoveryReviewSet} from '../../../../../models/security/deserializeIntoEdiscoveryReviewSet';
import {deserializeIntoEdiscoveryReviewSetCollectionResponse} from '../../../../../models/security/deserializeIntoEdiscoveryReviewSetCollectionResponse';
import {EdiscoveryReviewSet} from '../../../../../models/security/ediscoveryReviewSet';
import {EdiscoveryReviewSetCollectionResponse} from '../../../../../models/security/ediscoveryReviewSetCollectionResponse';
import {serializeEdiscoveryReviewSet} from '../../../../../models/security/serializeEdiscoveryReviewSet';
import {serializeEdiscoveryReviewSetCollectionResponse} from '../../../../../models/security/serializeEdiscoveryReviewSetCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ReviewSetsRequestBuilderGetRequestConfiguration} from './reviewSetsRequestBuilderGetRequestConfiguration';
import {ReviewSetsRequestBuilderPostRequestConfiguration} from './reviewSetsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the reviewSets property of the microsoft.graph.security.ediscoveryCase entity. */
export class ReviewSetsRequestBuilder {
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
     * Instantiates a new ReviewSetsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/reviewSets{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get a list of ediscoveryReviewSet objects associated with an eDiscovery case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ReviewSetsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new ediscoveryReviewSet object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: EdiscoveryReviewSet | undefined, requestConfiguration?: ReviewSetsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoveryReviewSet);
        return requestInfo;
    };
    /**
     * Get a list of ediscoveryReviewSet objects associated with an eDiscovery case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewSetCollectionResponse
     */
    public get(requestConfiguration?: ReviewSetsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewSetCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryReviewSetCollectionResponse>(requestInfo,deserializeIntoEdiscoveryReviewSetCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new ediscoveryReviewSet object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryReviewSet
     */
    public post(body: EdiscoveryReviewSet | undefined, requestConfiguration?: ReviewSetsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryReviewSet | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<EdiscoveryReviewSet>(requestInfo,deserializeIntoEdiscoveryReviewSet, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
