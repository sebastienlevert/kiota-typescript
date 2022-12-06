import {B2xIdentityUserFlow} from '../../models/b2xIdentityUserFlow';
import {B2xIdentityUserFlowCollectionResponse} from '../../models/b2xIdentityUserFlowCollectionResponse';
import {deserializeIntoB2xIdentityUserFlow} from '../../models/deserializeIntoB2xIdentityUserFlow';
import {deserializeIntoB2xIdentityUserFlowCollectionResponse} from '../../models/deserializeIntoB2xIdentityUserFlowCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeB2xIdentityUserFlow} from '../../models/serializeB2xIdentityUserFlow';
import {serializeB2xIdentityUserFlowCollectionResponse} from '../../models/serializeB2xIdentityUserFlowCollectionResponse';
import {B2xUserFlowsRequestBuilderGetRequestConfiguration} from './b2xUserFlowsRequestBuilderGetRequestConfiguration';
import {B2xUserFlowsRequestBuilderPostRequestConfiguration} from './b2xUserFlowsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the b2xUserFlows property of the microsoft.graph.identityContainer entity. */
export class B2xUserFlowsRequestBuilder {
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
     * Instantiates a new B2xUserFlowsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identity/b2xUserFlows{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of b2xIdentityUserFlow objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: B2xUserFlowsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new b2xIdentityUserFlow object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: B2xIdentityUserFlow | undefined, requestConfiguration?: B2xUserFlowsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeB2xIdentityUserFlow);
        return requestInfo;
    };
    /**
     * Retrieve a list of b2xIdentityUserFlow objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of B2xIdentityUserFlowCollectionResponse
     */
    public get(requestConfiguration?: B2xUserFlowsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<B2xIdentityUserFlowCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<B2xIdentityUserFlowCollectionResponse>(requestInfo,deserializeIntoB2xIdentityUserFlowCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new b2xIdentityUserFlow object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of B2xIdentityUserFlow
     */
    public post(body: B2xIdentityUserFlow | undefined, requestConfiguration?: B2xUserFlowsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<B2xIdentityUserFlow | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<B2xIdentityUserFlow>(requestInfo,deserializeIntoB2xIdentityUserFlow, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
