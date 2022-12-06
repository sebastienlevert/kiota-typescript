import {deserializeIntoGroup} from '../../models/deserializeIntoGroup';
import {Group} from '../../models/group';
import {ODataError} from '../../models/oDataErrors/oDataError';
import {serializeGroup} from '../../models/serializeGroup';
import {AcceptedSendersRequestBuilder} from './acceptedSenders/acceptedSendersRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ib4f8359ed18c3fd0b0bdc19b816f0dc3beebc3c3f65a099228488498db3435bf} from './acceptedSenders/item/directoryObjectItemRequestBuilder';
import {AddFavoriteRequestBuilder} from './addFavorite/addFavoriteRequestBuilder';
import {AppRoleAssignmentsRequestBuilder} from './appRoleAssignments/appRoleAssignmentsRequestBuilder';
import {AppRoleAssignmentItemRequestBuilder} from './appRoleAssignments/item/appRoleAssignmentItemRequestBuilder';
import {AssignLicenseRequestBuilder} from './assignLicense/assignLicenseRequestBuilder';
import {CalendarRequestBuilder} from './calendar/calendarRequestBuilder';
import {CalendarViewRequestBuilder} from './calendarView/calendarViewRequestBuilder';
import {EventItemRequestBuilder as i0ca79465e80affa8d9435e7c79baf860342d780f0470141b2440d9a2fa203699} from './calendarView/item/eventItemRequestBuilder';
import {CheckGrantedPermissionsForAppRequestBuilder} from './checkGrantedPermissionsForApp/checkGrantedPermissionsForAppRequestBuilder';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {ConversationsRequestBuilder} from './conversations/conversationsRequestBuilder';
import {ConversationItemRequestBuilder} from './conversations/item/conversationItemRequestBuilder';
import {CreatedOnBehalfOfRequestBuilder} from './createdOnBehalfOf/createdOnBehalfOfRequestBuilder';
import {DriveRequestBuilder} from './drive/driveRequestBuilder';
import {DrivesRequestBuilder} from './drives/drivesRequestBuilder';
import {DriveItemRequestBuilder} from './drives/item/driveItemRequestBuilder';
import {EventsRequestBuilder} from './events/eventsRequestBuilder';
import {EventItemRequestBuilder as iadcad03a86e2d20ab5fe12a6b17f905c1c98aa73753c6d7527b5ee4099663ecc} from './events/item/eventItemRequestBuilder';
import {ExtensionsRequestBuilder} from './extensions/extensionsRequestBuilder';
import {ExtensionItemRequestBuilder} from './extensions/item/extensionItemRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {GroupItemRequestBuilderDeleteRequestConfiguration} from './groupItemRequestBuilderDeleteRequestConfiguration';
import {GroupItemRequestBuilderGetRequestConfiguration} from './groupItemRequestBuilderGetRequestConfiguration';
import {GroupItemRequestBuilderPatchRequestConfiguration} from './groupItemRequestBuilderPatchRequestConfiguration';
import {GroupLifecyclePoliciesRequestBuilder} from './groupLifecyclePolicies/groupLifecyclePoliciesRequestBuilder';
import {GroupLifecyclePolicyItemRequestBuilder} from './groupLifecyclePolicies/item/groupLifecyclePolicyItemRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ic970856cda2d72432d94a95fe92c0482626d77b2bec77c3e99ab13de29bab37c} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i6dacd1141bb1ae36b441218e18390dbf75207a471f4609ec099459c7ee4d649f} from './members/item/directoryObjectItemRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ieb6a0451fbeebd6072feffdbac71888bdebccaf3e4b259b5bbbec26d3e10f1e9} from './membersWithLicenseErrors/item/directoryObjectItemRequestBuilder';
import {MembersWithLicenseErrorsRequestBuilder} from './membersWithLicenseErrors/membersWithLicenseErrorsRequestBuilder';
import {OnenoteRequestBuilder} from './onenote/onenoteRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i24eedb1aa5a485ed917a589c6649053ec0e8f29dd4e9dcd03c3f6984823ac265} from './owners/item/directoryObjectItemRequestBuilder';
import {OwnersRequestBuilder} from './owners/ownersRequestBuilder';
import {ResourceSpecificPermissionGrantItemRequestBuilder} from './permissionGrants/item/resourceSpecificPermissionGrantItemRequestBuilder';
import {PermissionGrantsRequestBuilder} from './permissionGrants/permissionGrantsRequestBuilder';
import {PhotoRequestBuilder} from './photo/photoRequestBuilder';
import {ProfilePhotoItemRequestBuilder} from './photos/item/profilePhotoItemRequestBuilder';
import {PhotosRequestBuilder} from './photos/photosRequestBuilder';
import {PlannerRequestBuilder} from './planner/plannerRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i86370e9b5778915dfb63567adddb31170d807dba820f5220f1096da7589288b9} from './rejectedSenders/item/directoryObjectItemRequestBuilder';
import {RejectedSendersRequestBuilder} from './rejectedSenders/rejectedSendersRequestBuilder';
import {RemoveFavoriteRequestBuilder} from './removeFavorite/removeFavoriteRequestBuilder';
import {RenewRequestBuilder} from './renew/renewRequestBuilder';
import {ResetUnseenCountRequestBuilder} from './resetUnseenCount/resetUnseenCountRequestBuilder';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {GroupSettingItemRequestBuilder} from './settings/item/groupSettingItemRequestBuilder';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {SiteItemRequestBuilder} from './sites/item/siteItemRequestBuilder';
import {SitesRequestBuilder} from './sites/sitesRequestBuilder';
import {SubscribeByMailRequestBuilder} from './subscribeByMail/subscribeByMailRequestBuilder';
import {TeamRequestBuilder} from './team/teamRequestBuilder';
import {ConversationThreadItemRequestBuilder} from './threads/item/conversationThreadItemRequestBuilder';
import {ThreadsRequestBuilder} from './threads/threadsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i2e02ac3971625e497501c262c08fc39af6fed5f2de6c07dae4b762eb63e254b1} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {DirectoryObjectItemRequestBuilder as ia99c2162fb75d06da701970e542a97a9d59083b584d665b0252968802f94a76c} from './transitiveMembers/item/directoryObjectItemRequestBuilder';
import {TransitiveMembersRequestBuilder} from './transitiveMembers/transitiveMembersRequestBuilder';
import {UnsubscribeByMailRequestBuilder} from './unsubscribeByMail/unsubscribeByMailRequestBuilder';
import {ValidatePropertiesRequestBuilder} from './validateProperties/validatePropertiesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of group entities. */
export class GroupItemRequestBuilder {
    /** Provides operations to manage the acceptedSenders property of the microsoft.graph.group entity. */
    public get acceptedSenders(): AcceptedSendersRequestBuilder {
        return new AcceptedSendersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the addFavorite method. */
    public get addFavorite(): AddFavoriteRequestBuilder {
        return new AddFavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the appRoleAssignments property of the microsoft.graph.group entity. */
    public get appRoleAssignments(): AppRoleAssignmentsRequestBuilder {
        return new AppRoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the assignLicense method. */
    public get assignLicense(): AssignLicenseRequestBuilder {
        return new AssignLicenseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the calendar property of the microsoft.graph.group entity. */
    public get calendar(): CalendarRequestBuilder {
        return new CalendarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the calendarView property of the microsoft.graph.group entity. */
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the checkGrantedPermissionsForApp method. */
    public get checkGrantedPermissionsForApp(): CheckGrantedPermissionsForAppRequestBuilder {
        return new CheckGrantedPermissionsForAppRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the checkMemberGroups method. */
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the checkMemberObjects method. */
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the conversations property of the microsoft.graph.group entity. */
    public get conversations(): ConversationsRequestBuilder {
        return new ConversationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the createdOnBehalfOf property of the microsoft.graph.group entity. */
    public get createdOnBehalfOf(): CreatedOnBehalfOfRequestBuilder {
        return new CreatedOnBehalfOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the drive property of the microsoft.graph.group entity. */
    public get drive(): DriveRequestBuilder {
        return new DriveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the drives property of the microsoft.graph.group entity. */
    public get drives(): DrivesRequestBuilder {
        return new DrivesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the events property of the microsoft.graph.group entity. */
    public get events(): EventsRequestBuilder {
        return new EventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the extensions property of the microsoft.graph.group entity. */
    public get extensions(): ExtensionsRequestBuilder {
        return new ExtensionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getMemberGroups method. */
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getMemberObjects method. */
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the groupLifecyclePolicies property of the microsoft.graph.group entity. */
    public get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder {
        return new GroupLifecyclePoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the memberOf property of the microsoft.graph.group entity. */
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the members property of the microsoft.graph.group entity. */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the membersWithLicenseErrors property of the microsoft.graph.group entity. */
    public get membersWithLicenseErrors(): MembersWithLicenseErrorsRequestBuilder {
        return new MembersWithLicenseErrorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the onenote property of the microsoft.graph.group entity. */
    public get onenote(): OnenoteRequestBuilder {
        return new OnenoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the owners property of the microsoft.graph.group entity. */
    public get owners(): OwnersRequestBuilder {
        return new OwnersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** Provides operations to manage the permissionGrants property of the microsoft.graph.group entity. */
    public get permissionGrants(): PermissionGrantsRequestBuilder {
        return new PermissionGrantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the photo property of the microsoft.graph.group entity. */
    public get photo(): PhotoRequestBuilder {
        return new PhotoRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the photos property of the microsoft.graph.group entity. */
    public get photos(): PhotosRequestBuilder {
        return new PhotosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the planner property of the microsoft.graph.group entity. */
    public get planner(): PlannerRequestBuilder {
        return new PlannerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the rejectedSenders property of the microsoft.graph.group entity. */
    public get rejectedSenders(): RejectedSendersRequestBuilder {
        return new RejectedSendersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the removeFavorite method. */
    public get removeFavorite(): RemoveFavoriteRequestBuilder {
        return new RemoveFavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the renew method. */
    public get renew(): RenewRequestBuilder {
        return new RenewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to call the resetUnseenCount method. */
    public get resetUnseenCount(): ResetUnseenCountRequestBuilder {
        return new ResetUnseenCountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the restore method. */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the settings property of the microsoft.graph.group entity. */
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the sites property of the microsoft.graph.group entity. */
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the subscribeByMail method. */
    public get subscribeByMail(): SubscribeByMailRequestBuilder {
        return new SubscribeByMailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the team property of the microsoft.graph.group entity. */
    public get team(): TeamRequestBuilder {
        return new TeamRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the threads property of the microsoft.graph.group entity. */
    public get threads(): ThreadsRequestBuilder {
        return new ThreadsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the transitiveMemberOf property of the microsoft.graph.group entity. */
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the transitiveMembers property of the microsoft.graph.group entity. */
    public get transitiveMembers(): TransitiveMembersRequestBuilder {
        return new TransitiveMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unsubscribeByMail method. */
    public get unsubscribeByMail(): UnsubscribeByMailRequestBuilder {
        return new UnsubscribeByMailRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** Provides operations to call the validateProperties method. */
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the ApiSdk.groups.item.acceptedSenders.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public acceptedSendersById(id: string) : ib4f8359ed18c3fd0b0bdc19b816f0dc3beebc3c3f65a099228488498db3435bf {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ib4f8359ed18c3fd0b0bdc19b816f0dc3beebc3c3f65a099228488498db3435bf(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the appRoleAssignments property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentItemRequestBuilder
     */
    public appRoleAssignmentsById(id: string) : AppRoleAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appRoleAssignment%2Did"] = id
        return new AppRoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the calendarView property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public calendarViewById(id: string) : i0ca79465e80affa8d9435e7c79baf860342d780f0470141b2440d9a2fa203699 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new i0ca79465e80affa8d9435e7c79baf860342d780f0470141b2440d9a2fa203699(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new GroupItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the conversations property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a ConversationItemRequestBuilder
     */
    public conversationsById(id: string) : ConversationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversation%2Did"] = id
        return new ConversationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete group. When deleted, Microsoft 365 groups are moved to a temporary container and can be restored within 30 days. After that time, they're permanently deleted. This isn't applicable to Security groups and Distribution groups which are permanently deleted immediately. To learn more, see deletedItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: GroupItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the properties and relationships of a group object. This operation returns by default only a subset of all the available properties, as noted in the Properties section. To get properties that are _not_ returned by default, specify them in a `$select` OData query option. The **hasMembersWithLicenseErrors** and **isArchived** properties are an exception and are not returned in the `$select` query.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: GroupItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a group object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Group | undefined, requestConfiguration?: GroupItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGroup);
        return requestInfo;
    };
    /**
     * Delete group. When deleted, Microsoft 365 groups are moved to a temporary container and can be restored within 30 days. After that time, they're permanently deleted. This isn't applicable to Security groups and Distribution groups which are permanently deleted immediately. To learn more, see deletedItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: GroupItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the drives property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a DriveItemRequestBuilder
     */
    public drivesById(id: string) : DriveItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["drive%2Did"] = id
        return new DriveItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the events property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a EventItemRequestBuilder
     */
    public eventsById(id: string) : iadcad03a86e2d20ab5fe12a6b17f905c1c98aa73753c6d7527b5ee4099663ecc {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event%2Did"] = id
        return new iadcad03a86e2d20ab5fe12a6b17f905c1c98aa73753c6d7527b5ee4099663ecc(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the extensions property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a ExtensionItemRequestBuilder
     */
    public extensionsById(id: string) : ExtensionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extension%2Did"] = id
        return new ExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get the properties and relationships of a group object. This operation returns by default only a subset of all the available properties, as noted in the Properties section. To get properties that are _not_ returned by default, specify them in a `$select` OData query option. The **hasMembersWithLicenseErrors** and **isArchived** properties are an exception and are not returned in the `$select` query.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Group
     */
    public get(requestConfiguration?: GroupItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Group | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Group>(requestInfo,deserializeIntoGroup, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the groupLifecyclePolicies property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a GroupLifecyclePolicyItemRequestBuilder
     */
    public groupLifecyclePoliciesById(id: string) : GroupLifecyclePolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupLifecyclePolicy%2Did"] = id
        return new GroupLifecyclePolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the memberOf property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public memberOfById(id: string) : ic970856cda2d72432d94a95fe92c0482626d77b2bec77c3e99ab13de29bab37c {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ic970856cda2d72432d94a95fe92c0482626d77b2bec77c3e99ab13de29bab37c(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.groups.item.members.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public membersById(id: string) : i6dacd1141bb1ae36b441218e18390dbf75207a471f4609ec099459c7ee4d649f {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i6dacd1141bb1ae36b441218e18390dbf75207a471f4609ec099459c7ee4d649f(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the membersWithLicenseErrors property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public membersWithLicenseErrorsById(id: string) : ieb6a0451fbeebd6072feffdbac71888bdebccaf3e4b259b5bbbec26d3e10f1e9 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ieb6a0451fbeebd6072feffdbac71888bdebccaf3e4b259b5bbbec26d3e10f1e9(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.groups.item.owners.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public ownersById(id: string) : i24eedb1aa5a485ed917a589c6649053ec0e8f29dd4e9dcd03c3f6984823ac265 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i24eedb1aa5a485ed917a589c6649053ec0e8f29dd4e9dcd03c3f6984823ac265(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the properties of a group object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Group
     */
    public patch(body: Group | undefined, requestConfiguration?: GroupItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Group | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Group>(requestInfo,deserializeIntoGroup, responseHandler, {}) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the permissionGrants property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a ResourceSpecificPermissionGrantItemRequestBuilder
     */
    public permissionGrantsById(id: string) : ResourceSpecificPermissionGrantItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resourceSpecificPermissionGrant%2Did"] = id
        return new ResourceSpecificPermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the photos property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a ProfilePhotoItemRequestBuilder
     */
    public photosById(id: string) : ProfilePhotoItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["profilePhoto%2Did"] = id
        return new ProfilePhotoItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.groups.item.rejectedSenders.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public rejectedSendersById(id: string) : i86370e9b5778915dfb63567adddb31170d807dba820f5220f1096da7589288b9 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i86370e9b5778915dfb63567adddb31170d807dba820f5220f1096da7589288b9(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the settings property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a GroupSettingItemRequestBuilder
     */
    public settingsById(id: string) : GroupSettingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["groupSetting%2Did"] = id
        return new GroupSettingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the sites property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a SiteItemRequestBuilder
     */
    public sitesById(id: string) : SiteItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site%2Did"] = id
        return new SiteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the threads property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a ConversationThreadItemRequestBuilder
     */
    public threadsById(id: string) : ConversationThreadItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["conversationThread%2Did"] = id
        return new ConversationThreadItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the transitiveMemberOf property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public transitiveMemberOfById(id: string) : i2e02ac3971625e497501c262c08fc39af6fed5f2de6c07dae4b762eb63e254b1 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i2e02ac3971625e497501c262c08fc39af6fed5f2de6c07dae4b762eb63e254b1(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the transitiveMembers property of the microsoft.graph.group entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public transitiveMembersById(id: string) : ia99c2162fb75d06da701970e542a97a9d59083b584d665b0252968802f94a76c {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new ia99c2162fb75d06da701970e542a97a9d59083b584d665b0252968802f94a76c(urlTplParams, this.requestAdapter);
    };
}
