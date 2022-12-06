import {deserializeIntoTokenIssuancePolicy} from '../../../../models/deserializeIntoTokenIssuancePolicy';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeTokenIssuancePolicy} from '../../../../models/serializeTokenIssuancePolicy';
import {TokenIssuancePolicy} from '../../../../models/tokenIssuancePolicy';
import {TokenIssuancePolicyItemRequestBuilderGetRequestConfiguration} from './tokenIssuancePolicyItemRequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.servicePrincipal entity. */
export class TokenIssuancePolicyItemRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new TokenIssuancePolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/tokenIssuancePolicies/{tokenIssuancePolicy%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The tokenIssuancePolicies assigned to this service principal.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: TokenIssuancePolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * The tokenIssuancePolicies assigned to this service principal.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TokenIssuancePolicy
     */
    public get(requestConfiguration?: TokenIssuancePolicyItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TokenIssuancePolicy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<TokenIssuancePolicy>(requestInfo,deserializeIntoTokenIssuancePolicy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
