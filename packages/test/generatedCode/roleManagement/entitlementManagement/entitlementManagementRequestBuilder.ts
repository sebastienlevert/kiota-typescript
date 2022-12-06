import {deserializeIntoRbacApplication} from '../../models/deserializeIntoRbacApplication';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {RbacApplication} from '../../models/rbacApplication';
import {serializeRbacApplication} from '../../models/serializeRbacApplication';
import {EntitlementManagementRequestBuilderDeleteRequestConfiguration} from './entitlementManagementRequestBuilderDeleteRequestConfiguration';
import {EntitlementManagementRequestBuilderGetRequestConfiguration} from './entitlementManagementRequestBuilderGetRequestConfiguration';
import {EntitlementManagementRequestBuilderPatchRequestConfiguration} from './entitlementManagementRequestBuilderPatchRequestConfiguration';
import {UnifiedRoleAssignmentItemRequestBuilder} from './roleAssignments/item/unifiedRoleAssignmentItemRequestBuilder';
import {RoleAssignmentsRequestBuilder} from './roleAssignments/roleAssignmentsRequestBuilder';
import {UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder} from './roleAssignmentScheduleInstances/item/unifiedRoleAssignmentScheduleInstanceItemRequestBuilder';
import {RoleAssignmentScheduleInstancesRequestBuilder} from './roleAssignmentScheduleInstances/roleAssignmentScheduleInstancesRequestBuilder';
import {UnifiedRoleAssignmentScheduleRequestItemRequestBuilder} from './roleAssignmentScheduleRequests/item/unifiedRoleAssignmentScheduleRequestItemRequestBuilder';
import {RoleAssignmentScheduleRequestsRequestBuilder} from './roleAssignmentScheduleRequests/roleAssignmentScheduleRequestsRequestBuilder';
import {UnifiedRoleAssignmentScheduleItemRequestBuilder} from './roleAssignmentSchedules/item/unifiedRoleAssignmentScheduleItemRequestBuilder';
import {RoleAssignmentSchedulesRequestBuilder} from './roleAssignmentSchedules/roleAssignmentSchedulesRequestBuilder';
import {UnifiedRoleDefinitionItemRequestBuilder} from './roleDefinitions/item/unifiedRoleDefinitionItemRequestBuilder';
import {RoleDefinitionsRequestBuilder} from './roleDefinitions/roleDefinitionsRequestBuilder';
import {UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder} from './roleEligibilityScheduleInstances/item/unifiedRoleEligibilityScheduleInstanceItemRequestBuilder';
import {RoleEligibilityScheduleInstancesRequestBuilder} from './roleEligibilityScheduleInstances/roleEligibilityScheduleInstancesRequestBuilder';
import {UnifiedRoleEligibilityScheduleRequestItemRequestBuilder} from './roleEligibilityScheduleRequests/item/unifiedRoleEligibilityScheduleRequestItemRequestBuilder';
import {RoleEligibilityScheduleRequestsRequestBuilder} from './roleEligibilityScheduleRequests/roleEligibilityScheduleRequestsRequestBuilder';
import {UnifiedRoleEligibilityScheduleItemRequestBuilder} from './roleEligibilitySchedules/item/unifiedRoleEligibilityScheduleItemRequestBuilder';
import {RoleEligibilitySchedulesRequestBuilder} from './roleEligibilitySchedules/roleEligibilitySchedulesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the entitlementManagement property of the microsoft.graph.roleManagement entity. */
export class EntitlementManagementRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the roleAssignments property of the microsoft.graph.rbacApplication entity. */
    public get roleAssignments(): RoleAssignmentsRequestBuilder {
        return new RoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleAssignmentScheduleInstances property of the microsoft.graph.rbacApplication entity. */
    public get roleAssignmentScheduleInstances(): RoleAssignmentScheduleInstancesRequestBuilder {
        return new RoleAssignmentScheduleInstancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleAssignmentScheduleRequests property of the microsoft.graph.rbacApplication entity. */
    public get roleAssignmentScheduleRequests(): RoleAssignmentScheduleRequestsRequestBuilder {
        return new RoleAssignmentScheduleRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleAssignmentSchedules property of the microsoft.graph.rbacApplication entity. */
    public get roleAssignmentSchedules(): RoleAssignmentSchedulesRequestBuilder {
        return new RoleAssignmentSchedulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleDefinitions property of the microsoft.graph.rbacApplication entity. */
    public get roleDefinitions(): RoleDefinitionsRequestBuilder {
        return new RoleDefinitionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleEligibilityScheduleInstances property of the microsoft.graph.rbacApplication entity. */
    public get roleEligibilityScheduleInstances(): RoleEligibilityScheduleInstancesRequestBuilder {
        return new RoleEligibilityScheduleInstancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleEligibilityScheduleRequests property of the microsoft.graph.rbacApplication entity. */
    public get roleEligibilityScheduleRequests(): RoleEligibilityScheduleRequestsRequestBuilder {
        return new RoleEligibilityScheduleRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleEligibilitySchedules property of the microsoft.graph.rbacApplication entity. */
    public get roleEligibilitySchedules(): RoleEligibilitySchedulesRequestBuilder {
        return new RoleEligibilitySchedulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new EntitlementManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/roleManagement/entitlementManagement{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property entitlementManagement for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: EntitlementManagementRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Container for roles and assignments for entitlement management resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: EntitlementManagementRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property entitlementManagement in roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: RbacApplication | undefined, requestConfiguration?: EntitlementManagementRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRbacApplication);
        return requestInfo;
    };
    /**
     * Delete navigation property entitlementManagement for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EntitlementManagementRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Container for roles and assignments for entitlement management resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RbacApplication
     */
    public get(requestConfiguration?: EntitlementManagementRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RbacApplication | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<RbacApplication>(requestInfo,deserializeIntoRbacApplication, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property entitlementManagement in roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RbacApplication
     */
    public patch(body: RbacApplication | undefined, requestConfiguration?: EntitlementManagementRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RbacApplication | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<RbacApplication>(requestInfo,deserializeIntoRbacApplication, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the roleAssignments property of the microsoft.graph.rbacApplication entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleAssignmentItemRequestBuilder
     */
    public roleAssignmentsById(id: string) : UnifiedRoleAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignment%2Did"] = id
        return new UnifiedRoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the roleAssignmentScheduleInstances property of the microsoft.graph.rbacApplication entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder
     */
    public roleAssignmentScheduleInstancesById(id: string) : UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignmentScheduleInstance%2Did"] = id
        return new UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the roleAssignmentScheduleRequests property of the microsoft.graph.rbacApplication entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleAssignmentScheduleRequestItemRequestBuilder
     */
    public roleAssignmentScheduleRequestsById(id: string) : UnifiedRoleAssignmentScheduleRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignmentScheduleRequest%2Did"] = id
        return new UnifiedRoleAssignmentScheduleRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the roleAssignmentSchedules property of the microsoft.graph.rbacApplication entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleAssignmentScheduleItemRequestBuilder
     */
    public roleAssignmentSchedulesById(id: string) : UnifiedRoleAssignmentScheduleItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignmentSchedule%2Did"] = id
        return new UnifiedRoleAssignmentScheduleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the roleDefinitions property of the microsoft.graph.rbacApplication entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleDefinitionItemRequestBuilder
     */
    public roleDefinitionsById(id: string) : UnifiedRoleDefinitionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleDefinition%2Did"] = id
        return new UnifiedRoleDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the roleEligibilityScheduleInstances property of the microsoft.graph.rbacApplication entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder
     */
    public roleEligibilityScheduleInstancesById(id: string) : UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleEligibilityScheduleInstance%2Did"] = id
        return new UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the roleEligibilityScheduleRequests property of the microsoft.graph.rbacApplication entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleEligibilityScheduleRequestItemRequestBuilder
     */
    public roleEligibilityScheduleRequestsById(id: string) : UnifiedRoleEligibilityScheduleRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleEligibilityScheduleRequest%2Did"] = id
        return new UnifiedRoleEligibilityScheduleRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the roleEligibilitySchedules property of the microsoft.graph.rbacApplication entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedRoleEligibilityScheduleItemRequestBuilder
     */
    public roleEligibilitySchedulesById(id: string) : UnifiedRoleEligibilityScheduleItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleEligibilitySchedule%2Did"] = id
        return new UnifiedRoleEligibilityScheduleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
