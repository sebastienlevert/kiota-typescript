import {deserializeIntoUnifiedRoleManagementPolicyAssignment} from '../../models/deserializeIntoUnifiedRoleManagementPolicyAssignment';
import {deserializeIntoUnifiedRoleManagementPolicyAssignmentCollectionResponse} from '../../models/deserializeIntoUnifiedRoleManagementPolicyAssignmentCollectionResponse';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeUnifiedRoleManagementPolicyAssignment} from '../../models/serializeUnifiedRoleManagementPolicyAssignment';
import {serializeUnifiedRoleManagementPolicyAssignmentCollectionResponse} from '../../models/serializeUnifiedRoleManagementPolicyAssignmentCollectionResponse';
import {UnifiedRoleManagementPolicyAssignment} from '../../models/unifiedRoleManagementPolicyAssignment';
import {UnifiedRoleManagementPolicyAssignmentCollectionResponse} from '../../models/unifiedRoleManagementPolicyAssignmentCollectionResponse';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {RoleManagementPolicyAssignmentsRequestBuilderGetRequestConfiguration} from './roleManagementPolicyAssignmentsRequestBuilderGetRequestConfiguration';
import {RoleManagementPolicyAssignmentsRequestBuilderPostRequestConfiguration} from './roleManagementPolicyAssignmentsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagementPolicyAssignments property of the microsoft.graph.policyRoot entity. */
export class RoleManagementPolicyAssignmentsRequestBuilder {
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
     * Instantiates a new RoleManagementPolicyAssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/policies/roleManagementPolicyAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get the details of all role management policy assignments including the policies and rules associated with the Azure AD roles.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: RoleManagementPolicyAssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to roleManagementPolicyAssignments for policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: UnifiedRoleManagementPolicyAssignment | undefined, requestConfiguration?: RoleManagementPolicyAssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleManagementPolicyAssignment);
        return requestInfo;
    };
    /**
     * Get the details of all role management policy assignments including the policies and rules associated with the Azure AD roles.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicyAssignmentCollectionResponse
     */
    public get(requestConfiguration?: RoleManagementPolicyAssignmentsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicyAssignmentCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicyAssignmentCollectionResponse>(requestInfo,deserializeIntoUnifiedRoleManagementPolicyAssignmentCollectionResponse, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to roleManagementPolicyAssignments for policies
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicyAssignment
     */
    public post(body: UnifiedRoleManagementPolicyAssignment | undefined, requestConfiguration?: RoleManagementPolicyAssignmentsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicyAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicyAssignment>(requestInfo,deserializeIntoUnifiedRoleManagementPolicyAssignment, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
