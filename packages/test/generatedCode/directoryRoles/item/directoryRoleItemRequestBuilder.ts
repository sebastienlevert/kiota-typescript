import {deserializeIntoDirectoryRole} from '../../models/deserializeIntoDirectoryRole';
import {DirectoryRole} from '../../models/directoryRole';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeDirectoryRole} from '../../models/serializeDirectoryRole';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {DirectoryRoleItemRequestBuilderDeleteRequestConfiguration} from './directoryRoleItemRequestBuilderDeleteRequestConfiguration';
import {DirectoryRoleItemRequestBuilderGetRequestConfiguration} from './directoryRoleItemRequestBuilderGetRequestConfiguration';
import {DirectoryRoleItemRequestBuilderPatchRequestConfiguration} from './directoryRoleItemRequestBuilderPatchRequestConfiguration';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {DirectoryObjectItemRequestBuilder} from './members/item/directoryObjectItemRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {ScopedRoleMembershipItemRequestBuilder} from './scopedMembers/item/scopedRoleMembershipItemRequestBuilder';
import {ScopedMembersRequestBuilder} from './scopedMembers/scopedMembersRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of directoryRole entities. */
export class DirectoryRoleItemRequestBuilder {
    /** Provides operations to call the checkMemberGroups method. */
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the checkMemberObjects method. */
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getMemberGroups method. */
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getMemberObjects method. */
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the members property of the microsoft.graph.directoryRole entity. */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the restore method. */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the scopedMembers property of the microsoft.graph.directoryRole entity. */
    public get scopedMembers(): ScopedMembersRequestBuilder {
        return new ScopedMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new DirectoryRoleItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/directoryRoles/{directoryRole%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete entity from directoryRoles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DirectoryRoleItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties of a directoryRole object. The role must be activated in tenant for a successful response. You can use both the object ID and template ID of the **directoryRole** with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Azure portal. For details, see Role template IDs.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: DirectoryRoleItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in directoryRoles
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: DirectoryRole | undefined, requestConfiguration?: DirectoryRoleItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDirectoryRole);
        return requestInfo;
    };
    /**
     * Delete entity from directoryRoles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DirectoryRoleItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieve the properties of a directoryRole object. The role must be activated in tenant for a successful response. You can use both the object ID and template ID of the **directoryRole** with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Azure portal. For details, see Role template IDs.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DirectoryRole
     */
    public get(requestConfiguration?: DirectoryRoleItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DirectoryRole | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DirectoryRole>(requestInfo,deserializeIntoDirectoryRole, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.directoryRoles.item.members.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public membersById(id: string) : DirectoryObjectItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new DirectoryObjectItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in directoryRoles
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DirectoryRole
     */
    public patch(body: DirectoryRole | undefined, requestConfiguration?: DirectoryRoleItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DirectoryRole | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<DirectoryRole>(requestInfo,deserializeIntoDirectoryRole, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the scopedMembers property of the microsoft.graph.directoryRole entity.
     * @param id Unique identifier of the item
     * @returns a ScopedRoleMembershipItemRequestBuilder
     */
    public scopedMembersById(id: string) : ScopedRoleMembershipItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["scopedRoleMembership%2Did"] = id
        return new ScopedRoleMembershipItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
