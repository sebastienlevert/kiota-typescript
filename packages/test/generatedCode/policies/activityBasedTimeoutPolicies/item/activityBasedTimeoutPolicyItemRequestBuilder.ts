import {ActivityBasedTimeoutPolicy} from '../../../models/activityBasedTimeoutPolicy';
import {deserializeIntoActivityBasedTimeoutPolicy} from '../../../models/deserializeIntoActivityBasedTimeoutPolicy';
import {ODataError} from '../../../models/oDataErrors/oDataError';
import {serializeActivityBasedTimeoutPolicy} from '../../../models/serializeActivityBasedTimeoutPolicy';
import {ActivityBasedTimeoutPolicyItemRequestBuilderDeleteRequestConfiguration} from './activityBasedTimeoutPolicyItemRequestBuilderDeleteRequestConfiguration';
import {ActivityBasedTimeoutPolicyItemRequestBuilderGetRequestConfiguration} from './activityBasedTimeoutPolicyItemRequestBuilderGetRequestConfiguration';
import {ActivityBasedTimeoutPolicyItemRequestBuilderPatchRequestConfiguration} from './activityBasedTimeoutPolicyItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the activityBasedTimeoutPolicies property of the microsoft.graph.policyRoot entity. */
export class ActivityBasedTimeoutPolicyItemRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ActivityBasedTimeoutPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property activityBasedTimeoutPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ActivityBasedTimeoutPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The policy that controls the idle time out for web sessions for applications.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ActivityBasedTimeoutPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property activityBasedTimeoutPolicies in policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ActivityBasedTimeoutPolicy | undefined, requestConfiguration?: ActivityBasedTimeoutPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeActivityBasedTimeoutPolicy);
        return requestInfo;
    };
    /**
     * Delete navigation property activityBasedTimeoutPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ActivityBasedTimeoutPolicyItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The policy that controls the idle time out for web sessions for applications.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ActivityBasedTimeoutPolicy
     */
    public get(requestConfiguration?: ActivityBasedTimeoutPolicyItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ActivityBasedTimeoutPolicy | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ActivityBasedTimeoutPolicy>(requestInfo,deserializeIntoActivityBasedTimeoutPolicy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property activityBasedTimeoutPolicies in policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ActivityBasedTimeoutPolicy
     */
    public patch(body: ActivityBasedTimeoutPolicy | undefined, requestConfiguration?: ActivityBasedTimeoutPolicyItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ActivityBasedTimeoutPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ActivityBasedTimeoutPolicy>(requestInfo,deserializeIntoActivityBasedTimeoutPolicy, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
