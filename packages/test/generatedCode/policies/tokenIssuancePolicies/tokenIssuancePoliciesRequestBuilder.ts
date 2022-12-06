import {deserializeIntoTokenIssuancePolicy} from '../../models/deserializeIntoTokenIssuancePolicy';
import {deserializeIntoTokenIssuancePolicyCollectionResponse} from '../../models/deserializeIntoTokenIssuancePolicyCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeTokenIssuancePolicy} from '../../models/serializeTokenIssuancePolicy';
import {serializeTokenIssuancePolicyCollectionResponse} from '../../models/serializeTokenIssuancePolicyCollectionResponse';
import {TokenIssuancePolicy} from '../../models/tokenIssuancePolicy';
import {TokenIssuancePolicyCollectionResponse} from '../../models/tokenIssuancePolicyCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TokenIssuancePoliciesRequestBuilderGetRequestConfiguration} from './tokenIssuancePoliciesRequestBuilderGetRequestConfiguration';
import {TokenIssuancePoliciesRequestBuilderPostRequestConfiguration} from './tokenIssuancePoliciesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.policyRoot entity. */
export class TokenIssuancePoliciesRequestBuilder {
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
     * Instantiates a new TokenIssuancePoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/tokenIssuancePolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get a list of tokenIssuancePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: TokenIssuancePoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new tokenIssuancePolicy object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: TokenIssuancePolicy | undefined, requestConfiguration?: TokenIssuancePoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTokenIssuancePolicy);
        return requestInfo;
    };
    /**
     * Get a list of tokenIssuancePolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TokenIssuancePolicyCollectionResponse
     */
    public get(requestConfiguration?: TokenIssuancePoliciesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TokenIssuancePolicyCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<TokenIssuancePolicyCollectionResponse>(requestInfo,deserializeIntoTokenIssuancePolicyCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new tokenIssuancePolicy object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TokenIssuancePolicy
     */
    public post(body: TokenIssuancePolicy | undefined, requestConfiguration?: TokenIssuancePoliciesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TokenIssuancePolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<TokenIssuancePolicy>(requestInfo,deserializeIntoTokenIssuancePolicy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
