import {deserializeIntoIdentityUserFlowAttribute} from '../../models/deserializeIntoIdentityUserFlowAttribute';
import {deserializeIntoIdentityUserFlowAttributeCollectionResponse} from '../../models/deserializeIntoIdentityUserFlowAttributeCollectionResponse';
import {IdentityUserFlowAttribute} from '../../models/identityUserFlowAttribute';
import {IdentityUserFlowAttributeCollectionResponse} from '../../models/identityUserFlowAttributeCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeIdentityUserFlowAttribute} from '../../models/serializeIdentityUserFlowAttribute';
import {serializeIdentityUserFlowAttributeCollectionResponse} from '../../models/serializeIdentityUserFlowAttributeCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserFlowAttributesRequestBuilderGetRequestConfiguration} from './userFlowAttributesRequestBuilderGetRequestConfiguration';
import {UserFlowAttributesRequestBuilderPostRequestConfiguration} from './userFlowAttributesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the userFlowAttributes property of the microsoft.graph.identityContainer entity. */
export class UserFlowAttributesRequestBuilder {
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
     * Instantiates a new UserFlowAttributesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identity/userFlowAttributes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of identityUserFlowAttribute objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: UserFlowAttributesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new identityUserFlowAttribute object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: IdentityUserFlowAttribute | undefined, requestConfiguration?: UserFlowAttributesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIdentityUserFlowAttribute);
        return requestInfo;
    };
    /**
     * Retrieve a list of identityUserFlowAttribute objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityUserFlowAttributeCollectionResponse
     */
    public get(requestConfiguration?: UserFlowAttributesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityUserFlowAttributeCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<IdentityUserFlowAttributeCollectionResponse>(requestInfo,deserializeIntoIdentityUserFlowAttributeCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new identityUserFlowAttribute object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityUserFlowAttribute
     */
    public post(body: IdentityUserFlowAttribute | undefined, requestConfiguration?: UserFlowAttributesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityUserFlowAttribute | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<IdentityUserFlowAttribute>(requestInfo,deserializeIntoIdentityUserFlowAttribute, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
