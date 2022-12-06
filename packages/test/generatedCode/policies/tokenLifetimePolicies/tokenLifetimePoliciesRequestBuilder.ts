import {deserializeIntoTokenLifetimePolicy} from '../../models/deserializeIntoTokenLifetimePolicy';
import {deserializeIntoTokenLifetimePolicyCollectionResponse} from '../../models/deserializeIntoTokenLifetimePolicyCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeTokenLifetimePolicy} from '../../models/serializeTokenLifetimePolicy';
import {serializeTokenLifetimePolicyCollectionResponse} from '../../models/serializeTokenLifetimePolicyCollectionResponse';
import {TokenLifetimePolicy} from '../../models/tokenLifetimePolicy';
import {TokenLifetimePolicyCollectionResponse} from '../../models/tokenLifetimePolicyCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TokenLifetimePoliciesRequestBuilderGetRequestConfiguration} from './tokenLifetimePoliciesRequestBuilderGetRequestConfiguration';
import {TokenLifetimePoliciesRequestBuilderPostRequestConfiguration} from './tokenLifetimePoliciesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.policyRoot entity. */
export class TokenLifetimePoliciesRequestBuilder {
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
     * Instantiates a new TokenLifetimePoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/tokenLifetimePolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get a list of tokenLifetimePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: TokenLifetimePoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new tokenLifetimePolicy object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: TokenLifetimePolicy | undefined, requestConfiguration?: TokenLifetimePoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTokenLifetimePolicy);
        return requestInfo;
    };
    /**
     * Get a list of tokenLifetimePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TokenLifetimePolicyCollectionResponse
     */
    public get(requestConfiguration?: TokenLifetimePoliciesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TokenLifetimePolicyCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<TokenLifetimePolicyCollectionResponse>(requestInfo,deserializeIntoTokenLifetimePolicyCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new tokenLifetimePolicy object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TokenLifetimePolicy
     */
    public post(body: TokenLifetimePolicy | undefined, requestConfiguration?: TokenLifetimePoliciesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TokenLifetimePolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<TokenLifetimePolicy>(requestInfo,deserializeIntoTokenLifetimePolicy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
