import {GroupAccessType} from './groupAccessType';
import {AppRoleAssignment, AssignedLabel, AssignedLicense, Calendar, Conversation, ConversationThread, DirectoryObject, DirectorySetting, Drive, Endpoint, Event, Extension, GroupLifecyclePolicy, GroupWritebackConfiguration, LicenseProcessingState, MembershipRuleProcessingStatus, Onenote, OnPremisesProvisioningError, PlannerGroup, ProfilePhoto, ResourceSpecificPermissionGrant, Site, Team} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Group extends DirectoryObject, Partial<Parsable> {
    /** The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post. */
    acceptedSenders?: DirectoryObject[];
    /** The accessType property */
    accessType?: GroupAccessType;
    /** Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    allowExternalSenders?: boolean;
    /** Represents the app roles a group has been granted for an application. Supports $expand. */
    appRoleAssignments?: AppRoleAssignment[];
    /** The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select. */
    assignedLabels?: AssignedLabel[];
    /** The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq). Read-only. */
    assignedLicenses?: AssignedLicense[];
    /** Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    autoSubscribeNewMembers?: boolean;
    /** The calendar property */
    calendar?: Calendar;
    /** The calendar view for the calendar. Read-only. */
    calendarView?: Event[];
    /** Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith). */
    classification?: string;
    /** The group's conversations. */
    conversations?: Conversation[];
    /** App ID of the app used to create the group. Can be null for some groups. Returned by default. Read-only. Supports $filter (eq, ne, not, in, startsWith). */
    createdByAppId?: string;
    /** Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    createdDateTime?: Date;
    /** The createdOnBehalfOf property */
    createdOnBehalfOf?: DirectoryObject;
    /** An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search. */
    description?: string;
    /** The display name for the group. Required. Maximum length is 256 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    displayName?: string;
    /** The drive property */
    drive?: Drive;
    /** The group's drives. Read-only. */
    drives?: Drive[];
    /** Endpoints for the group. Read-only. Nullable. */
    endpoints?: Endpoint[];
    /** The group's events. */
    events?: Event[];
    /** Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    expirationDateTime?: Date;
    /** The collection of open extensions defined for the group. Read-only. Nullable. */
    extensions?: Extension[];
    /** The collection of lifecycle policies for this group. Read-only. Nullable. */
    groupLifecyclePolicies?: GroupLifecyclePolicy[];
    /** Specifies the group type and its membership. If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static. Returned by default. Supports $filter (eq, not). */
    groupTypes?: string[];
    /** Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true).  Supports $filter (eq). */
    hasMembersWithLicenseErrors?: boolean;
    /** true if the group is not displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups; false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    hideFromAddressLists?: boolean;
    /** true if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web, false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    hideFromOutlookClients?: boolean;
    /** Identifies the info segments assigned to the group. Returned by default. Supports $filter (eq, not, ge, le, startsWith). */
    infoCatalogs?: string[];
    /** When a group is associated with a team, this property determines whether the team is in read-only mode. To read this property, use the /group/{groupId}/team endpoint or the Get team API. To update this property, use the archiveTeam and unarchiveTeam APIs. */
    isArchived?: boolean;
    /** Indicates whether this group can be assigned to an Azure Active Directory role. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global Administrator and Privileged Role Administrator roles can set this property. The caller must also be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, not). */
    isAssignableToRole?: boolean;
    /** The isFavorite property */
    isFavorite?: boolean;
    /** The isManagementRestricted property */
    isManagementRestricted?: boolean;
    /** Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    isSubscribedByMail?: boolean;
    /** The licenseProcessingState property */
    licenseProcessingState?: LicenseProcessingState;
    /** The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    mail?: string;
    /** Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not, and eq on null values). */
    mailEnabled?: boolean;
    /** The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : <> , SPACE. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    mailNickname?: string;
    /** Groups and administrative units that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand. */
    memberOf?: DirectoryObject[];
    /** Direct members of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName). */
    members?: DirectoryObject[];
    /** The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith). */
    membershipRule?: string;
    /** Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in). */
    membershipRuleProcessingState?: string;
    /** The membershipRuleProcessingStatus property */
    membershipRuleProcessingStatus?: MembershipRuleProcessingStatus;
    /** A list of group members with license errors from this group-based license assignment. Read-only. */
    membersWithLicenseErrors?: DirectoryObject[];
    /** The onenote property */
    onenote?: Onenote;
    /** Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only. */
    onPremisesDomainName?: string;
    /** Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    onPremisesLastSyncDateTime?: Date;
    /** Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only. */
    onPremisesNetBiosName?: string;
    /** Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not). */
    onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
    /** Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only. */
    onPremisesSamAccountName?: string;
    /** Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter (eq including on null values). Read-only. */
    onPremisesSecurityIdentifier?: string;
    /** true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    onPremisesSyncEnabled?: boolean;
    /** The organizationId property */
    organizationId?: string;
    /** The owners of the group who can be users or service principals. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner.  Supports $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1); Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName). */
    owners?: DirectoryObject[];
    /** The permissions that have been granted for a group to a specific application. Supports $expand. */
    permissionGrants?: ResourceSpecificPermissionGrant[];
    /** The photo property */
    photo?: ProfilePhoto;
    /** The profile photos owned by the group. Read-only. Nullable. */
    photos?: ProfilePhoto[];
    /** The planner property */
    planner?: PlannerGroup;
    /** The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see OneDrive Online Multi-Geo. Nullable. Returned by default. */
    preferredDataLocation?: string;
    /** The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    preferredLanguage?: string;
    /** Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required for filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, /$count eq 0, /$count ne 0). */
    proxyAddresses?: string[];
    /** The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable */
    rejectedSenders?: DirectoryObject[];
    /** Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    renewedDateTime?: Date;
    /** Specifies the group behaviors that can be set for a Microsoft 365 group during creation. This can be set only as part of creation (POST). Possible values are AllowOnlyMembersToPost, HideGroupInOutlook, SubscribeNewGroupMembers, WelcomeEmailDisabled. For more information, see Set Microsoft 365 group behaviors and provisioning options. */
    resourceBehaviorOptions?: string[];
    /** Specifies the group resources that are provisioned as part of Microsoft 365 group creation, that are not normally part of default group creation. Possible value is Team. For more information, see Set Microsoft 365 group behaviors and provisioning options. Returned by default. Supports $filter (eq, not, startsWith. */
    resourceProvisioningOptions?: string[];
    /** Specifies whether the group is a security group. Required.Returned by default. Supports $filter (eq, ne, not, in). */
    securityEnabled?: boolean;
    /** Security identifier of the group, used in Windows scenarios. Returned by default. */
    securityIdentifier?: string;
    /** Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable. */
    settings?: DirectorySetting[];
    /** The list of SharePoint sites in this group. Access the default site with /sites/root. */
    sites?: Site[];
    /** The team property */
    team?: Team;
    /** Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default. */
    theme?: string;
    /** The group's conversation threads. Nullable. */
    threads?: ConversationThread[];
    /** The groups that a group is a member of, either directly and through nested membership. Nullable. */
    transitiveMemberOf?: DirectoryObject[];
    /** The direct and transitive members of a group. Nullable. */
    transitiveMembers?: DirectoryObject[];
    /** Count of conversations that have been delivered one or more new posts since the signed-in user's last visit to the group. This property is the same as unseenCount. Returned only on $select. */
    unseenConversationsCount?: number;
    /** Count of conversations that have received new posts since the signed-in user last visited the group. This property is the same as unseenConversationsCount.Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    unseenCount?: number;
    /** Count of new posts that have been delivered to the group's conversations since the signed-in user's last visit to the group. Returned only on $select. */
    unseenMessagesCount?: number;
    /** Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or HiddenMembership. HiddenMembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable. */
    visibility?: string;
    /** The writebackConfiguration property */
    writebackConfiguration?: GroupWritebackConfiguration;
}
