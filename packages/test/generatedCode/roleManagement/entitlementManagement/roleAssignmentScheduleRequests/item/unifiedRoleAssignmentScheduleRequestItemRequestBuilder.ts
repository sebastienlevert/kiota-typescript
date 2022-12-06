import {deserializeIntoUnifiedRoleAssignmentScheduleRequest} from '../../../../models/deserializeIntoUnifiedRoleAssignmentScheduleRequest';
import {ODataError} from '../../../../models/oDataErrors/oDataError';
import {serializeUnifiedRoleAssignmentScheduleRequest} from '../../../../models/serializeUnifiedRoleAssignmentScheduleRequest';
import {UnifiedRoleAssignmentScheduleRequest} from '../../../../models/unifiedRoleAssignmentScheduleRequest';
import {ActivatedUsingRequestBuilder} from './activatedUsing/activatedUsingRequestBuilder';
import {AppScopeRequestBuilder} from './appScope/appScopeRequestBuilder';
import {CancelRequestBuilder} from './cancel/cancelRequestBuilder';
import {DirectoryScopeRequestBuilder} from './directoryScope/directoryScopeRequestBuilder';
import {PrincipalRequestBuilder} from './principal/principalRequestBuilder';
import {RoleDefinitionRequestBuilder} from './roleDefinition/roleDefinitionRequestBuilder';
import {TargetScheduleRequestBuilder} from './targetSchedule/targetScheduleRequestBuilder';
import {UnifiedRoleAssignmentScheduleRequestItemRequestBuilderDeleteRequestConfiguration} from './unifiedRoleAssignmentScheduleRequestItemRequestBuilderDeleteRequestConfiguration';
import {UnifiedRoleAssignmentScheduleRequestItemRequestBuilderGetRequestConfiguration} from './unifiedRoleAssignmentScheduleRequestItemRequestBuilderGetRequestConfiguration';
import {UnifiedRoleAssignmentScheduleRequestItemRequestBuilderPatchRequestConfiguration} from './unifiedRoleAssignmentScheduleRequestItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleAssignmentScheduleRequests property of the microsoft.graph.rbacApplication entity. */
export class UnifiedRoleAssignmentScheduleRequestItemRequestBuilder {
    /** Provides operations to manage the activatedUsing property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get activatedUsing(): ActivatedUsingRequestBuilder {
        return new ActivatedUsingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the appScope property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get appScope(): AppScopeRequestBuilder {
        return new AppScopeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cancel method. */
    public get cancel(): CancelRequestBuilder {
        return new CancelRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the directoryScope property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get directoryScope(): DirectoryScopeRequestBuilder {
        return new DirectoryScopeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to manage the principal property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get principal(): PrincipalRequestBuilder {
        return new PrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the roleDefinition property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get roleDefinition(): RoleDefinitionRequestBuilder {
        return new RoleDefinitionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the targetSchedule property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get targetSchedule(): TargetScheduleRequestBuilder {
        return new TargetScheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new UnifiedRoleAssignmentScheduleRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property roleAssignmentScheduleRequests for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Requests for active role assignments to principals through PIM.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property roleAssignmentScheduleRequests in roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: UnifiedRoleAssignmentScheduleRequest | undefined, requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleAssignmentScheduleRequest);
        return requestInfo;
    };
    /**
     * Delete navigation property roleAssignmentScheduleRequests for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Requests for active role assignments to principals through PIM.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleAssignmentScheduleRequest
     */
    public get(requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleAssignmentScheduleRequest | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleAssignmentScheduleRequest>(requestInfo,deserializeIntoUnifiedRoleAssignmentScheduleRequest, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property roleAssignmentScheduleRequests in roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleAssignmentScheduleRequest
     */
    public patch(body: UnifiedRoleAssignmentScheduleRequest | undefined, requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleAssignmentScheduleRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<UnifiedRoleAssignmentScheduleRequest>(requestInfo,deserializeIntoUnifiedRoleAssignmentScheduleRequest, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
}
