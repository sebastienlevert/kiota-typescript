import {deserializeIntoIdentityUserFlowAttributeAssignment} from '../../../../models/deserializeIntoIdentityUserFlowAttributeAssignment';
import {deserializeIntoIdentityUserFlowAttributeAssignmentCollectionResponse} from '../../../../models/deserializeIntoIdentityUserFlowAttributeAssignmentCollectionResponse';
import {IdentityUserFlowAttributeAssignment} from '../../../../models/identityUserFlowAttributeAssignment';
import {IdentityUserFlowAttributeAssignmentCollectionResponse} from '../../../../models/identityUserFlowAttributeAssignmentCollectionResponse';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeIdentityUserFlowAttributeAssignment} from '../../../../models/serializeIdentityUserFlowAttributeAssignment';
import {serializeIdentityUserFlowAttributeAssignmentCollectionResponse} from '../../../../models/serializeIdentityUserFlowAttributeAssignmentCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GetOrderRequestBuilder} from './getOrder/getOrderRequestBuilder';
import {SetOrderRequestBuilder} from './setOrder/setOrderRequestBuilder';
import {UserAttributeAssignmentsRequestBuilderGetRequestConfiguration} from './userAttributeAssignmentsRequestBuilderGetRequestConfiguration';
import {UserAttributeAssignmentsRequestBuilderPostRequestConfiguration} from './userAttributeAssignmentsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the userAttributeAssignments property of the microsoft.graph.b2xIdentityUserFlow entity. */
export class UserAttributeAssignmentsRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the setOrder method. */
    public get setOrder(): SetOrderRequestBuilder {
        return new SetOrderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new UserAttributeAssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/userAttributeAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get the identityUserFlowAttributeAssignment resources from the userAttributeAssignments navigation property in a b2xIdentityUserFlow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: UserAttributeAssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new identityUserFlowAttributeAssignment object in a b2xIdentityUserFlow.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: IdentityUserFlowAttributeAssignment | undefined, requestConfiguration?: UserAttributeAssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIdentityUserFlowAttributeAssignment);
        return requestInfo;
    };
    /**
     * Get the identityUserFlowAttributeAssignment resources from the userAttributeAssignments navigation property in a b2xIdentityUserFlow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityUserFlowAttributeAssignmentCollectionResponse
     */
    public get(requestConfiguration?: UserAttributeAssignmentsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityUserFlowAttributeAssignmentCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<IdentityUserFlowAttributeAssignmentCollectionResponse>(requestInfo,deserializeIntoIdentityUserFlowAttributeAssignmentCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to call the getOrder method.
     * @returns a getOrderRequestBuilder
     */
    public getOrder() : GetOrderRequestBuilder {
        return new GetOrderRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Create a new identityUserFlowAttributeAssignment object in a b2xIdentityUserFlow.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityUserFlowAttributeAssignment
     */
    public post(body: IdentityUserFlowAttributeAssignment | undefined, requestConfiguration?: UserAttributeAssignmentsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityUserFlowAttributeAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<IdentityUserFlowAttributeAssignment>(requestInfo,deserializeIntoIdentityUserFlowAttributeAssignment, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
