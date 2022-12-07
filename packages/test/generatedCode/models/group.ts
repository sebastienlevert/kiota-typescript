import {createAppRoleAssignmentFromDiscriminatorValue} from './createAppRoleAssignmentFromDiscriminatorValue';
import {createAssignedLabelFromDiscriminatorValue} from './createAssignedLabelFromDiscriminatorValue';
import {createAssignedLicenseFromDiscriminatorValue} from './createAssignedLicenseFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createConversationFromDiscriminatorValue} from './createConversationFromDiscriminatorValue';
import {createConversationThreadFromDiscriminatorValue} from './createConversationThreadFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createDirectorySettingFromDiscriminatorValue} from './createDirectorySettingFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createGroupLifecyclePolicyFromDiscriminatorValue} from './createGroupLifecyclePolicyFromDiscriminatorValue';
import {createGroupWritebackConfigurationFromDiscriminatorValue} from './createGroupWritebackConfigurationFromDiscriminatorValue';
import {createLicenseProcessingStateFromDiscriminatorValue} from './createLicenseProcessingStateFromDiscriminatorValue';
import {createMembershipRuleProcessingStatusFromDiscriminatorValue} from './createMembershipRuleProcessingStatusFromDiscriminatorValue';
import {createOnenoteFromDiscriminatorValue} from './createOnenoteFromDiscriminatorValue';
import {createOnPremisesProvisioningErrorFromDiscriminatorValue} from './createOnPremisesProvisioningErrorFromDiscriminatorValue';
import {createPlannerGroupFromDiscriminatorValue} from './createPlannerGroupFromDiscriminatorValue';
import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from './createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {GroupAccessType} from './groupAccessType';
import {AppRoleAssignment, AssignedLabel, AssignedLicense, Calendar, Conversation, ConversationThread, DirectoryObject, DirectorySetting, Drive, Endpoint, Event, Extension, GroupLifecyclePolicy, GroupWritebackConfiguration, LicenseProcessingState, MembershipRuleProcessingStatus, Onenote, OnPremisesProvisioningError, PlannerGroup, ProfilePhoto, ResourceSpecificPermissionGrant, Site, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Group extends DirectoryObject implements Parsable {
    /** The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post. */
    private _acceptedSenders?: DirectoryObject[] | undefined;
    /** The accessType property */
    private _accessType?: GroupAccessType | undefined;
    /** Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _allowExternalSenders?: boolean | undefined;
    /** Represents the app roles a group has been granted for an application. Supports $expand. */
    private _appRoleAssignments?: AppRoleAssignment[] | undefined;
    /** The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select. */
    private _assignedLabels?: AssignedLabel[] | undefined;
    /** The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq). Read-only. */
    private _assignedLicenses?: AssignedLicense[] | undefined;
    /** Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _autoSubscribeNewMembers?: boolean | undefined;
    /** The calendar property */
    private _calendar?: Calendar | undefined;
    /** The calendar view for the calendar. Read-only. */
    private _calendarView?: Event[] | undefined;
    /** Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith). */
    private _classification?: string | undefined;
    /** The group's conversations. */
    private _conversations?: Conversation[] | undefined;
    /** App ID of the app used to create the group. Can be null for some groups. Returned by default. Read-only. Supports $filter (eq, ne, not, in, startsWith). */
    private _createdByAppId?: string | undefined;
    /** Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The createdOnBehalfOf property */
    private _createdOnBehalfOf?: DirectoryObject | undefined;
    /** An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search. */
    private _description?: string | undefined;
    /** The display name for the group. Required. Maximum length is 256 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    private _displayName?: string | undefined;
    /** The drive property */
    private _drive?: Drive | undefined;
    /** The group's drives. Read-only. */
    private _drives?: Drive[] | undefined;
    /** Endpoints for the group. Read-only. Nullable. */
    private _endpoints?: Endpoint[] | undefined;
    /** The group's events. */
    private _events?: Event[] | undefined;
    /** Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    private _expirationDateTime?: Date | undefined;
    /** The collection of open extensions defined for the group. Read-only. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** The collection of lifecycle policies for this group. Read-only. Nullable. */
    private _groupLifecyclePolicies?: GroupLifecyclePolicy[] | undefined;
    /** Specifies the group type and its membership. If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static. Returned by default. Supports $filter (eq, not). */
    private _groupTypes?: string[] | undefined;
    /** Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true).  Supports $filter (eq). */
    private _hasMembersWithLicenseErrors?: boolean | undefined;
    /** true if the group is not displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups; false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _hideFromAddressLists?: boolean | undefined;
    /** true if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web, false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _hideFromOutlookClients?: boolean | undefined;
    /** Identifies the info segments assigned to the group. Returned by default. Supports $filter (eq, not, ge, le, startsWith). */
    private _infoCatalogs?: string[] | undefined;
    /** When a group is associated with a team, this property determines whether the team is in read-only mode. To read this property, use the /group/{groupId}/team endpoint or the Get team API. To update this property, use the archiveTeam and unarchiveTeam APIs. */
    private _isArchived?: boolean | undefined;
    /** Indicates whether this group can be assigned to an Azure Active Directory role. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global Administrator and Privileged Role Administrator roles can set this property. The caller must also be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, not). */
    private _isAssignableToRole?: boolean | undefined;
    /** The isFavorite property */
    private _isFavorite?: boolean | undefined;
    /** The isManagementRestricted property */
    private _isManagementRestricted?: boolean | undefined;
    /** Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _isSubscribedByMail?: boolean | undefined;
    /** The licenseProcessingState property */
    private _licenseProcessingState?: LicenseProcessingState | undefined;
    /** The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _mail?: string | undefined;
    /** Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not, and eq on null values). */
    private _mailEnabled?: boolean | undefined;
    /** The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : <> , SPACE. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). */
    private _mailNickname?: string | undefined;
    /** Groups and administrative units that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand. */
    private _memberOf?: DirectoryObject[] | undefined;
    /** Direct members of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName). */
    private _members?: DirectoryObject[] | undefined;
    /** The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith). */
    private _membershipRule?: string | undefined;
    /** Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in). */
    private _membershipRuleProcessingState?: string | undefined;
    /** The membershipRuleProcessingStatus property */
    private _membershipRuleProcessingStatus?: MembershipRuleProcessingStatus | undefined;
    /** A list of group members with license errors from this group-based license assignment. Read-only. */
    private _membersWithLicenseErrors?: DirectoryObject[] | undefined;
    /** The onenote property */
    private _onenote?: Onenote | undefined;
    /** Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only. */
    private _onPremisesDomainName?: string | undefined;
    /** Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in). */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only. */
    private _onPremisesNetBiosName?: string | undefined;
    /** Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not). */
    private _onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only. */
    private _onPremisesSamAccountName?: string | undefined;
    /** Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter (eq including on null values). Read-only. */
    private _onPremisesSecurityIdentifier?: string | undefined;
    /** true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values). */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** The organizationId property */
    private _organizationId?: string | undefined;
    /** The owners of the group who can be users or service principals. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner.  Supports $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1); Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName). */
    private _owners?: DirectoryObject[] | undefined;
    /** The permissions that have been granted for a group to a specific application. Supports $expand. */
    private _permissionGrants?: ResourceSpecificPermissionGrant[] | undefined;
    /** The photo property */
    private _photo?: ProfilePhoto | undefined;
    /** The profile photos owned by the group. Read-only. Nullable. */
    private _photos?: ProfilePhoto[] | undefined;
    /** The planner property */
    private _planner?: PlannerGroup | undefined;
    /** The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see OneDrive Online Multi-Geo. Nullable. Returned by default. */
    private _preferredDataLocation?: string | undefined;
    /** The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _preferredLanguage?: string | undefined;
    /** Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required for filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, /$count eq 0, /$count ne 0). */
    private _proxyAddresses?: string[] | undefined;
    /** The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable */
    private _rejectedSenders?: DirectoryObject[] | undefined;
    /** Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only. */
    private _renewedDateTime?: Date | undefined;
    /** Specifies the group behaviors that can be set for a Microsoft 365 group during creation. This can be set only as part of creation (POST). Possible values are AllowOnlyMembersToPost, HideGroupInOutlook, SubscribeNewGroupMembers, WelcomeEmailDisabled. For more information, see Set Microsoft 365 group behaviors and provisioning options. */
    private _resourceBehaviorOptions?: string[] | undefined;
    /** Specifies the group resources that are provisioned as part of Microsoft 365 group creation, that are not normally part of default group creation. Possible value is Team. For more information, see Set Microsoft 365 group behaviors and provisioning options. Returned by default. Supports $filter (eq, not, startsWith. */
    private _resourceProvisioningOptions?: string[] | undefined;
    /** Specifies whether the group is a security group. Required.Returned by default. Supports $filter (eq, ne, not, in). */
    private _securityEnabled?: boolean | undefined;
    /** Security identifier of the group, used in Windows scenarios. Returned by default. */
    private _securityIdentifier?: string | undefined;
    /** Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable. */
    private _settings?: DirectorySetting[] | undefined;
    /** The list of SharePoint sites in this group. Access the default site with /sites/root. */
    private _sites?: Site[] | undefined;
    /** The team property */
    private _team?: Team | undefined;
    /** Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default. */
    private _theme?: string | undefined;
    /** The group's conversation threads. Nullable. */
    private _threads?: ConversationThread[] | undefined;
    /** The groups that a group is a member of, either directly and through nested membership. Nullable. */
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /** The direct and transitive members of a group. Nullable. */
    private _transitiveMembers?: DirectoryObject[] | undefined;
    /** Count of conversations that have been delivered one or more new posts since the signed-in user's last visit to the group. This property is the same as unseenCount. Returned only on $select. */
    private _unseenConversationsCount?: number | undefined;
    /** Count of conversations that have received new posts since the signed-in user last visited the group. This property is the same as unseenConversationsCount.Returned only on $select. Supported only on the Get group API (GET /groups/{ID}). */
    private _unseenCount?: number | undefined;
    /** Count of new posts that have been delivered to the group's conversations since the signed-in user's last visit to the group. Returned only on $select. */
    private _unseenMessagesCount?: number | undefined;
    /** Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or HiddenMembership. HiddenMembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable. */
    private _visibility?: string | undefined;
    /** The writebackConfiguration property */
    private _writebackConfiguration?: GroupWritebackConfiguration | undefined;
    /**
     * Gets the acceptedSenders property value. The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post.
     * @returns a directoryObject
     */
    public get acceptedSenders() {
        return this._acceptedSenders;
    };
    /**
     * Sets the acceptedSenders property value. The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post.
     * @param value Value to set for the acceptedSenders property.
     */
    public set acceptedSenders(value: DirectoryObject[] | undefined) {
        this._acceptedSenders = value;
    };
    /**
     * Gets the accessType property value. The accessType property
     * @returns a groupAccessType
     */
    public get accessType() {
        return this._accessType;
    };
    /**
     * Sets the accessType property value. The accessType property
     * @param value Value to set for the accessType property.
     */
    public set accessType(value: GroupAccessType | undefined) {
        this._accessType = value;
    };
    /**
     * Gets the allowExternalSenders property value. Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get allowExternalSenders() {
        return this._allowExternalSenders;
    };
    /**
     * Sets the allowExternalSenders property value. Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the allowExternalSenders property.
     */
    public set allowExternalSenders(value: boolean | undefined) {
        this._allowExternalSenders = value;
    };
    /**
     * Gets the appRoleAssignments property value. Represents the app roles a group has been granted for an application. Supports $expand.
     * @returns a appRoleAssignment
     */
    public get appRoleAssignments() {
        return this._appRoleAssignments;
    };
    /**
     * Sets the appRoleAssignments property value. Represents the app roles a group has been granted for an application. Supports $expand.
     * @param value Value to set for the appRoleAssignments property.
     */
    public set appRoleAssignments(value: AppRoleAssignment[] | undefined) {
        this._appRoleAssignments = value;
    };
    /**
     * Gets the assignedLabels property value. The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select.
     * @returns a assignedLabel
     */
    public get assignedLabels() {
        return this._assignedLabels;
    };
    /**
     * Sets the assignedLabels property value. The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select.
     * @param value Value to set for the assignedLabels property.
     */
    public set assignedLabels(value: AssignedLabel[] | undefined) {
        this._assignedLabels = value;
    };
    /**
     * Gets the assignedLicenses property value. The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq). Read-only.
     * @returns a assignedLicense
     */
    public get assignedLicenses() {
        return this._assignedLicenses;
    };
    /**
     * Sets the assignedLicenses property value. The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq). Read-only.
     * @param value Value to set for the assignedLicenses property.
     */
    public set assignedLicenses(value: AssignedLicense[] | undefined) {
        this._assignedLicenses = value;
    };
    /**
     * Gets the autoSubscribeNewMembers property value. Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get autoSubscribeNewMembers() {
        return this._autoSubscribeNewMembers;
    };
    /**
     * Sets the autoSubscribeNewMembers property value. Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the autoSubscribeNewMembers property.
     */
    public set autoSubscribeNewMembers(value: boolean | undefined) {
        this._autoSubscribeNewMembers = value;
    };
    /**
     * Gets the calendar property value. The calendar property
     * @returns a calendar
     */
    public get calendar() {
        return this._calendar;
    };
    /**
     * Sets the calendar property value. The calendar property
     * @param value Value to set for the calendar property.
     */
    public set calendar(value: Calendar | undefined) {
        this._calendar = value;
    };
    /**
     * Gets the calendarView property value. The calendar view for the calendar. Read-only.
     * @returns a event
     */
    public get calendarView() {
        return this._calendarView;
    };
    /**
     * Sets the calendarView property value. The calendar view for the calendar. Read-only.
     * @param value Value to set for the calendarView property.
     */
    public set calendarView(value: Event[] | undefined) {
        this._calendarView = value;
    };
    /**
     * Gets the classification property value. Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @returns a string
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Sets the classification property value. Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @param value Value to set for the classification property.
     */
    public set classification(value: string | undefined) {
        this._classification = value;
    };
    /**
     * Instantiates a new group and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the conversations property value. The group's conversations.
     * @returns a conversation
     */
    public get conversations() {
        return this._conversations;
    };
    /**
     * Sets the conversations property value. The group's conversations.
     * @param value Value to set for the conversations property.
     */
    public set conversations(value: Conversation[] | undefined) {
        this._conversations = value;
    };
    /**
     * Gets the createdByAppId property value. App ID of the app used to create the group. Can be null for some groups. Returned by default. Read-only. Supports $filter (eq, ne, not, in, startsWith).
     * @returns a string
     */
    public get createdByAppId() {
        return this._createdByAppId;
    };
    /**
     * Sets the createdByAppId property value. App ID of the app used to create the group. Can be null for some groups. Returned by default. Read-only. Supports $filter (eq, ne, not, in, startsWith).
     * @param value Value to set for the createdByAppId property.
     */
    public set createdByAppId(value: string | undefined) {
        this._createdByAppId = value;
    };
    /**
     * Gets the createdDateTime property value. Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the createdOnBehalfOf property value. The createdOnBehalfOf property
     * @returns a directoryObject
     */
    public get createdOnBehalfOf() {
        return this._createdOnBehalfOf;
    };
    /**
     * Sets the createdOnBehalfOf property value. The createdOnBehalfOf property
     * @param value Value to set for the createdOnBehalfOf property.
     */
    public set createdOnBehalfOf(value: DirectoryObject | undefined) {
        this._createdOnBehalfOf = value;
    };
    /**
     * Gets the description property value. An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. An optional description for the group. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith) and $search.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display name for the group. Required. Maximum length is 256 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the group. Required. Maximum length is 256 characters. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the drive property value. The drive property
     * @returns a drive
     */
    public get drive() {
        return this._drive;
    };
    /**
     * Sets the drive property value. The drive property
     * @param value Value to set for the drive property.
     */
    public set drive(value: Drive | undefined) {
        this._drive = value;
    };
    /**
     * Gets the drives property value. The group's drives. Read-only.
     * @returns a drive
     */
    public get drives() {
        return this._drives;
    };
    /**
     * Sets the drives property value. The group's drives. Read-only.
     * @param value Value to set for the drives property.
     */
    public set drives(value: Drive[] | undefined) {
        this._drives = value;
    };
    /**
     * Gets the endpoints property value. Endpoints for the group. Read-only. Nullable.
     * @returns a endpoint
     */
    public get endpoints() {
        return this._endpoints;
    };
    /**
     * Sets the endpoints property value. Endpoints for the group. Read-only. Nullable.
     * @param value Value to set for the endpoints property.
     */
    public set endpoints(value: Endpoint[] | undefined) {
        this._endpoints = value;
    };
    /**
     * Gets the events property value. The group's events.
     * @returns a event
     */
    public get events() {
        return this._events;
    };
    /**
     * Sets the events property value. The group's events.
     * @param value Value to set for the events property.
     */
    public set events(value: Event[] | undefined) {
        this._events = value;
    };
    /**
     * Gets the expirationDateTime property value. Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the group. Read-only. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the group. Read-only. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "acceptedSenders": n => { this.acceptedSenders = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "accessType": n => { this.accessType = n.getEnumValue<GroupAccessType>(GroupAccessType); },
            "allowExternalSenders": n => { this.allowExternalSenders = n.getBooleanValue(); },
            "appRoleAssignments": n => { this.appRoleAssignments = n.getCollectionOfObjectValues<AppRoleAssignment>(createAppRoleAssignmentFromDiscriminatorValue); },
            "assignedLabels": n => { this.assignedLabels = n.getCollectionOfObjectValues<AssignedLabel>(createAssignedLabelFromDiscriminatorValue); },
            "assignedLicenses": n => { this.assignedLicenses = n.getCollectionOfObjectValues<AssignedLicense>(createAssignedLicenseFromDiscriminatorValue); },
            "autoSubscribeNewMembers": n => { this.autoSubscribeNewMembers = n.getBooleanValue(); },
            "calendar": n => { this.calendar = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
            "calendarView": n => { this.calendarView = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
            "classification": n => { this.classification = n.getStringValue(); },
            "conversations": n => { this.conversations = n.getCollectionOfObjectValues<Conversation>(createConversationFromDiscriminatorValue); },
            "createdByAppId": n => { this.createdByAppId = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "createdOnBehalfOf": n => { this.createdOnBehalfOf = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "drive": n => { this.drive = n.getObjectValue<Drive>(createDriveFromDiscriminatorValue); },
            "drives": n => { this.drives = n.getCollectionOfObjectValues<Drive>(createDriveFromDiscriminatorValue); },
            "endpoints": n => { this.endpoints = n.getCollectionOfObjectValues<Endpoint>(createEndpointFromDiscriminatorValue); },
            "events": n => { this.events = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
            "groupLifecyclePolicies": n => { this.groupLifecyclePolicies = n.getCollectionOfObjectValues<GroupLifecyclePolicy>(createGroupLifecyclePolicyFromDiscriminatorValue); },
            "groupTypes": n => { this.groupTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "hasMembersWithLicenseErrors": n => { this.hasMembersWithLicenseErrors = n.getBooleanValue(); },
            "hideFromAddressLists": n => { this.hideFromAddressLists = n.getBooleanValue(); },
            "hideFromOutlookClients": n => { this.hideFromOutlookClients = n.getBooleanValue(); },
            "infoCatalogs": n => { this.infoCatalogs = n.getCollectionOfPrimitiveValues<string>(); },
            "isArchived": n => { this.isArchived = n.getBooleanValue(); },
            "isAssignableToRole": n => { this.isAssignableToRole = n.getBooleanValue(); },
            "isFavorite": n => { this.isFavorite = n.getBooleanValue(); },
            "isManagementRestricted": n => { this.isManagementRestricted = n.getBooleanValue(); },
            "isSubscribedByMail": n => { this.isSubscribedByMail = n.getBooleanValue(); },
            "licenseProcessingState": n => { this.licenseProcessingState = n.getObjectValue<LicenseProcessingState>(createLicenseProcessingStateFromDiscriminatorValue); },
            "mail": n => { this.mail = n.getStringValue(); },
            "mailEnabled": n => { this.mailEnabled = n.getBooleanValue(); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "memberOf": n => { this.memberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "members": n => { this.members = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "membershipRule": n => { this.membershipRule = n.getStringValue(); },
            "membershipRuleProcessingState": n => { this.membershipRuleProcessingState = n.getStringValue(); },
            "membershipRuleProcessingStatus": n => { this.membershipRuleProcessingStatus = n.getObjectValue<MembershipRuleProcessingStatus>(createMembershipRuleProcessingStatusFromDiscriminatorValue); },
            "membersWithLicenseErrors": n => { this.membersWithLicenseErrors = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "onenote": n => { this.onenote = n.getObjectValue<Onenote>(createOnenoteFromDiscriminatorValue); },
            "onPremisesDomainName": n => { this.onPremisesDomainName = n.getStringValue(); },
            "onPremisesLastSyncDateTime": n => { this.onPremisesLastSyncDateTime = n.getDateValue(); },
            "onPremisesNetBiosName": n => { this.onPremisesNetBiosName = n.getStringValue(); },
            "onPremisesProvisioningErrors": n => { this.onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningError>(createOnPremisesProvisioningErrorFromDiscriminatorValue); },
            "onPremisesSamAccountName": n => { this.onPremisesSamAccountName = n.getStringValue(); },
            "onPremisesSecurityIdentifier": n => { this.onPremisesSecurityIdentifier = n.getStringValue(); },
            "onPremisesSyncEnabled": n => { this.onPremisesSyncEnabled = n.getBooleanValue(); },
            "organizationId": n => { this.organizationId = n.getStringValue(); },
            "owners": n => { this.owners = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "permissionGrants": n => { this.permissionGrants = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrant>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
            "photo": n => { this.photo = n.getObjectValue<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); },
            "photos": n => { this.photos = n.getCollectionOfObjectValues<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); },
            "planner": n => { this.planner = n.getObjectValue<PlannerGroup>(createPlannerGroupFromDiscriminatorValue); },
            "preferredDataLocation": n => { this.preferredDataLocation = n.getStringValue(); },
            "preferredLanguage": n => { this.preferredLanguage = n.getStringValue(); },
            "proxyAddresses": n => { this.proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "rejectedSenders": n => { this.rejectedSenders = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "renewedDateTime": n => { this.renewedDateTime = n.getDateValue(); },
            "resourceBehaviorOptions": n => { this.resourceBehaviorOptions = n.getCollectionOfPrimitiveValues<string>(); },
            "resourceProvisioningOptions": n => { this.resourceProvisioningOptions = n.getCollectionOfPrimitiveValues<string>(); },
            "securityEnabled": n => { this.securityEnabled = n.getBooleanValue(); },
            "securityIdentifier": n => { this.securityIdentifier = n.getStringValue(); },
            "settings": n => { this.settings = n.getCollectionOfObjectValues<DirectorySetting>(createDirectorySettingFromDiscriminatorValue); },
            "sites": n => { this.sites = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
            "team": n => { this.team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "theme": n => { this.theme = n.getStringValue(); },
            "threads": n => { this.threads = n.getCollectionOfObjectValues<ConversationThread>(createConversationThreadFromDiscriminatorValue); },
            "transitiveMemberOf": n => { this.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "transitiveMembers": n => { this.transitiveMembers = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "unseenConversationsCount": n => { this.unseenConversationsCount = n.getNumberValue(); },
            "unseenCount": n => { this.unseenCount = n.getNumberValue(); },
            "unseenMessagesCount": n => { this.unseenMessagesCount = n.getNumberValue(); },
            "visibility": n => { this.visibility = n.getStringValue(); },
            "writebackConfiguration": n => { this.writebackConfiguration = n.getObjectValue<GroupWritebackConfiguration>(createGroupWritebackConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the groupLifecyclePolicies property value. The collection of lifecycle policies for this group. Read-only. Nullable.
     * @returns a groupLifecyclePolicy
     */
    public get groupLifecyclePolicies() {
        return this._groupLifecyclePolicies;
    };
    /**
     * Sets the groupLifecyclePolicies property value. The collection of lifecycle policies for this group. Read-only. Nullable.
     * @param value Value to set for the groupLifecyclePolicies property.
     */
    public set groupLifecyclePolicies(value: GroupLifecyclePolicy[] | undefined) {
        this._groupLifecyclePolicies = value;
    };
    /**
     * Gets the groupTypes property value. Specifies the group type and its membership. If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static. Returned by default. Supports $filter (eq, not).
     * @returns a string
     */
    public get groupTypes() {
        return this._groupTypes;
    };
    /**
     * Sets the groupTypes property value. Specifies the group type and its membership. If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static. Returned by default. Supports $filter (eq, not).
     * @param value Value to set for the groupTypes property.
     */
    public set groupTypes(value: string[] | undefined) {
        this._groupTypes = value;
    };
    /**
     * Gets the hasMembersWithLicenseErrors property value. Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true).  Supports $filter (eq).
     * @returns a boolean
     */
    public get hasMembersWithLicenseErrors() {
        return this._hasMembersWithLicenseErrors;
    };
    /**
     * Sets the hasMembersWithLicenseErrors property value. Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true).  Supports $filter (eq).
     * @param value Value to set for the hasMembersWithLicenseErrors property.
     */
    public set hasMembersWithLicenseErrors(value: boolean | undefined) {
        this._hasMembersWithLicenseErrors = value;
    };
    /**
     * Gets the hideFromAddressLists property value. true if the group is not displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups; false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get hideFromAddressLists() {
        return this._hideFromAddressLists;
    };
    /**
     * Sets the hideFromAddressLists property value. true if the group is not displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups; false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the hideFromAddressLists property.
     */
    public set hideFromAddressLists(value: boolean | undefined) {
        this._hideFromAddressLists = value;
    };
    /**
     * Gets the hideFromOutlookClients property value. true if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web, false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get hideFromOutlookClients() {
        return this._hideFromOutlookClients;
    };
    /**
     * Sets the hideFromOutlookClients property value. true if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web, false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the hideFromOutlookClients property.
     */
    public set hideFromOutlookClients(value: boolean | undefined) {
        this._hideFromOutlookClients = value;
    };
    /**
     * Gets the infoCatalogs property value. Identifies the info segments assigned to the group. Returned by default. Supports $filter (eq, not, ge, le, startsWith).
     * @returns a string
     */
    public get infoCatalogs() {
        return this._infoCatalogs;
    };
    /**
     * Sets the infoCatalogs property value. Identifies the info segments assigned to the group. Returned by default. Supports $filter (eq, not, ge, le, startsWith).
     * @param value Value to set for the infoCatalogs property.
     */
    public set infoCatalogs(value: string[] | undefined) {
        this._infoCatalogs = value;
    };
    /**
     * Gets the isArchived property value. When a group is associated with a team, this property determines whether the team is in read-only mode. To read this property, use the /group/{groupId}/team endpoint or the Get team API. To update this property, use the archiveTeam and unarchiveTeam APIs.
     * @returns a boolean
     */
    public get isArchived() {
        return this._isArchived;
    };
    /**
     * Sets the isArchived property value. When a group is associated with a team, this property determines whether the team is in read-only mode. To read this property, use the /group/{groupId}/team endpoint or the Get team API. To update this property, use the archiveTeam and unarchiveTeam APIs.
     * @param value Value to set for the isArchived property.
     */
    public set isArchived(value: boolean | undefined) {
        this._isArchived = value;
    };
    /**
     * Gets the isAssignableToRole property value. Indicates whether this group can be assigned to an Azure Active Directory role. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global Administrator and Privileged Role Administrator roles can set this property. The caller must also be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, not).
     * @returns a boolean
     */
    public get isAssignableToRole() {
        return this._isAssignableToRole;
    };
    /**
     * Sets the isAssignableToRole property value. Indicates whether this group can be assigned to an Azure Active Directory role. Optional. This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global Administrator and Privileged Role Administrator roles can set this property. The caller must also be assigned the RoleManagement.ReadWrite.Directory permission to set this property or update the membership of such groups. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, not).
     * @param value Value to set for the isAssignableToRole property.
     */
    public set isAssignableToRole(value: boolean | undefined) {
        this._isAssignableToRole = value;
    };
    /**
     * Gets the isFavorite property value. The isFavorite property
     * @returns a boolean
     */
    public get isFavorite() {
        return this._isFavorite;
    };
    /**
     * Sets the isFavorite property value. The isFavorite property
     * @param value Value to set for the isFavorite property.
     */
    public set isFavorite(value: boolean | undefined) {
        this._isFavorite = value;
    };
    /**
     * Gets the isManagementRestricted property value. The isManagementRestricted property
     * @returns a boolean
     */
    public get isManagementRestricted() {
        return this._isManagementRestricted;
    };
    /**
     * Sets the isManagementRestricted property value. The isManagementRestricted property
     * @param value Value to set for the isManagementRestricted property.
     */
    public set isManagementRestricted(value: boolean | undefined) {
        this._isManagementRestricted = value;
    };
    /**
     * Gets the isSubscribedByMail property value. Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a boolean
     */
    public get isSubscribedByMail() {
        return this._isSubscribedByMail;
    };
    /**
     * Sets the isSubscribedByMail property value. Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the isSubscribedByMail property.
     */
    public set isSubscribedByMail(value: boolean | undefined) {
        this._isSubscribedByMail = value;
    };
    /**
     * Gets the licenseProcessingState property value. The licenseProcessingState property
     * @returns a licenseProcessingState
     */
    public get licenseProcessingState() {
        return this._licenseProcessingState;
    };
    /**
     * Sets the licenseProcessingState property value. The licenseProcessingState property
     * @param value Value to set for the licenseProcessingState property.
     */
    public set licenseProcessingState(value: LicenseProcessingState | undefined) {
        this._licenseProcessingState = value;
    };
    /**
     * Gets the mail property value. The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mail() {
        return this._mail;
    };
    /**
     * Sets the mail property value. The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mail property.
     */
    public set mail(value: string | undefined) {
        this._mail = value;
    };
    /**
     * Gets the mailEnabled property value. Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not, and eq on null values).
     * @returns a boolean
     */
    public get mailEnabled() {
        return this._mailEnabled;
    };
    /**
     * Sets the mailEnabled property value. Specifies whether the group is mail-enabled. Required. Returned by default. Supports $filter (eq, ne, not, and eq on null values).
     * @param value Value to set for the mailEnabled property.
     */
    public set mailEnabled(value: boolean | undefined) {
        this._mailEnabled = value;
    };
    /**
     * Gets the mailNickname property value. The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : <> , SPACE. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters. This property can contain only characters in the ASCII character set 0 - 127 except the following: @ () / [] ' ; : <> , SPACE. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith).
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Gets the memberOf property value. Groups and administrative units that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Sets the memberOf property value. Groups and administrative units that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        this._memberOf = value;
    };
    /**
     * Gets the members property value. Direct members of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName).
     * @returns a directoryObject
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. Direct members of this group, who can be users, devices, other groups, or service principals. Supports the List members, Add member, and Remove member operations. Nullable. Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=members($select=id,userPrincipalName,displayName).
     * @param value Value to set for the members property.
     */
    public set members(value: DirectoryObject[] | undefined) {
        this._members = value;
    };
    /**
     * Gets the membershipRule property value. The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @returns a string
     */
    public get membershipRule() {
        return this._membershipRule;
    };
    /**
     * Sets the membershipRule property value. The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, not, ge, le, startsWith).
     * @param value Value to set for the membershipRule property.
     */
    public set membershipRule(value: string | undefined) {
        this._membershipRule = value;
    };
    /**
     * Gets the membershipRuleProcessingState property value. Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in).
     * @returns a string
     */
    public get membershipRuleProcessingState() {
        return this._membershipRuleProcessingState;
    };
    /**
     * Sets the membershipRuleProcessingState property value. Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the membershipRuleProcessingState property.
     */
    public set membershipRuleProcessingState(value: string | undefined) {
        this._membershipRuleProcessingState = value;
    };
    /**
     * Gets the membershipRuleProcessingStatus property value. The membershipRuleProcessingStatus property
     * @returns a membershipRuleProcessingStatus
     */
    public get membershipRuleProcessingStatus() {
        return this._membershipRuleProcessingStatus;
    };
    /**
     * Sets the membershipRuleProcessingStatus property value. The membershipRuleProcessingStatus property
     * @param value Value to set for the membershipRuleProcessingStatus property.
     */
    public set membershipRuleProcessingStatus(value: MembershipRuleProcessingStatus | undefined) {
        this._membershipRuleProcessingStatus = value;
    };
    /**
     * Gets the membersWithLicenseErrors property value. A list of group members with license errors from this group-based license assignment. Read-only.
     * @returns a directoryObject
     */
    public get membersWithLicenseErrors() {
        return this._membersWithLicenseErrors;
    };
    /**
     * Sets the membersWithLicenseErrors property value. A list of group members with license errors from this group-based license assignment. Read-only.
     * @param value Value to set for the membersWithLicenseErrors property.
     */
    public set membersWithLicenseErrors(value: DirectoryObject[] | undefined) {
        this._membersWithLicenseErrors = value;
    };
    /**
     * Gets the onenote property value. The onenote property
     * @returns a onenote
     */
    public get onenote() {
        return this._onenote;
    };
    /**
     * Sets the onenote property value. The onenote property
     * @param value Value to set for the onenote property.
     */
    public set onenote(value: Onenote | undefined) {
        this._onenote = value;
    };
    /**
     * Gets the onPremisesDomainName property value. Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @returns a string
     */
    public get onPremisesDomainName() {
        return this._onPremisesDomainName;
    };
    /**
     * Sets the onPremisesDomainName property value. Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @param value Value to set for the onPremisesDomainName property.
     */
    public set onPremisesDomainName(value: string | undefined) {
        this._onPremisesDomainName = value;
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, not, ge, le, in).
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        this._onPremisesLastSyncDateTime = value;
    };
    /**
     * Gets the onPremisesNetBiosName property value. Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @returns a string
     */
    public get onPremisesNetBiosName() {
        return this._onPremisesNetBiosName;
    };
    /**
     * Sets the onPremisesNetBiosName property value. Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
     * @param value Value to set for the onPremisesNetBiosName property.
     */
    public set onPremisesNetBiosName(value: string | undefined) {
        this._onPremisesNetBiosName = value;
    };
    /**
     * Gets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not).
     * @returns a onPremisesProvisioningError
     */
    public get onPremisesProvisioningErrors() {
        return this._onPremisesProvisioningErrors;
    };
    /**
     * Sets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, not).
     * @param value Value to set for the onPremisesProvisioningErrors property.
     */
    public set onPremisesProvisioningErrors(value: OnPremisesProvisioningError[] | undefined) {
        this._onPremisesProvisioningErrors = value;
    };
    /**
     * Gets the onPremisesSamAccountName property value. Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only.
     * @returns a string
     */
    public get onPremisesSamAccountName() {
        return this._onPremisesSamAccountName;
    };
    /**
     * Sets the onPremisesSamAccountName property value. Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith). Read-only.
     * @param value Value to set for the onPremisesSamAccountName property.
     */
    public set onPremisesSamAccountName(value: string | undefined) {
        this._onPremisesSamAccountName = value;
    };
    /**
     * Gets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter (eq including on null values). Read-only.
     * @returns a string
     */
    public get onPremisesSecurityIdentifier() {
        return this._onPremisesSecurityIdentifier;
    };
    /**
     * Sets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter (eq including on null values). Read-only.
     * @param value Value to set for the onPremisesSecurityIdentifier property.
     */
    public set onPremisesSecurityIdentifier(value: string | undefined) {
        this._onPremisesSecurityIdentifier = value;
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        this._onPremisesSyncEnabled = value;
    };
    /**
     * Gets the organizationId property value. The organizationId property
     * @returns a string
     */
    public get organizationId() {
        return this._organizationId;
    };
    /**
     * Sets the organizationId property value. The organizationId property
     * @param value Value to set for the organizationId property.
     */
    public set organizationId(value: string | undefined) {
        this._organizationId = value;
    };
    /**
     * Gets the owners property value. The owners of the group who can be users or service principals. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner.  Supports $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1); Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName).
     * @returns a directoryObject
     */
    public get owners() {
        return this._owners;
    };
    /**
     * Sets the owners property value. The owners of the group who can be users or service principals. Nullable. If this property is not specified when creating a Microsoft 365 group, the calling user is automatically assigned as the group owner.  Supports $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1); Supports $expand including nested $select. For example, /groups?$filter=startsWith(displayName,'Role')&$select=id,displayName&$expand=owners($select=id,userPrincipalName,displayName).
     * @param value Value to set for the owners property.
     */
    public set owners(value: DirectoryObject[] | undefined) {
        this._owners = value;
    };
    /**
     * Gets the permissionGrants property value. The permissions that have been granted for a group to a specific application. Supports $expand.
     * @returns a resourceSpecificPermissionGrant
     */
    public get permissionGrants() {
        return this._permissionGrants;
    };
    /**
     * Sets the permissionGrants property value. The permissions that have been granted for a group to a specific application. Supports $expand.
     * @param value Value to set for the permissionGrants property.
     */
    public set permissionGrants(value: ResourceSpecificPermissionGrant[] | undefined) {
        this._permissionGrants = value;
    };
    /**
     * Gets the photo property value. The photo property
     * @returns a profilePhoto
     */
    public get photo() {
        return this._photo;
    };
    /**
     * Sets the photo property value. The photo property
     * @param value Value to set for the photo property.
     */
    public set photo(value: ProfilePhoto | undefined) {
        this._photo = value;
    };
    /**
     * Gets the photos property value. The profile photos owned by the group. Read-only. Nullable.
     * @returns a profilePhoto
     */
    public get photos() {
        return this._photos;
    };
    /**
     * Sets the photos property value. The profile photos owned by the group. Read-only. Nullable.
     * @param value Value to set for the photos property.
     */
    public set photos(value: ProfilePhoto[] | undefined) {
        this._photos = value;
    };
    /**
     * Gets the planner property value. The planner property
     * @returns a plannerGroup
     */
    public get planner() {
        return this._planner;
    };
    /**
     * Sets the planner property value. The planner property
     * @param value Value to set for the planner property.
     */
    public set planner(value: PlannerGroup | undefined) {
        this._planner = value;
    };
    /**
     * Gets the preferredDataLocation property value. The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see OneDrive Online Multi-Geo. Nullable. Returned by default.
     * @returns a string
     */
    public get preferredDataLocation() {
        return this._preferredDataLocation;
    };
    /**
     * Sets the preferredDataLocation property value. The preferred data location for the Microsoft 365 group. By default, the group inherits the group creator's preferred data location. To set this property, the calling user must be assigned one of the following Azure AD roles:  Global Administrator  User Account Administrator Directory Writer  Exchange Administrator  SharePoint Administrator  For more information about this property, see OneDrive Online Multi-Geo. Nullable. Returned by default.
     * @param value Value to set for the preferredDataLocation property.
     */
    public set preferredDataLocation(value: string | undefined) {
        this._preferredDataLocation = value;
    };
    /**
     * Gets the preferredLanguage property value. The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get preferredLanguage() {
        return this._preferredLanguage;
    };
    /**
     * Sets the preferredLanguage property value. The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example en-US. Returned by default. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the preferredLanguage property.
     */
    public set preferredLanguage(value: string | undefined) {
        this._preferredLanguage = value;
    };
    /**
     * Gets the proxyAddresses property value. Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required for filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, /$count eq 0, /$count ne 0).
     * @returns a string
     */
    public get proxyAddresses() {
        return this._proxyAddresses;
    };
    /**
     * Sets the proxyAddresses property value. Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required for filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, not, ge, le, startsWith, endsWith, /$count eq 0, /$count ne 0).
     * @param value Value to set for the proxyAddresses property.
     */
    public set proxyAddresses(value: string[] | undefined) {
        this._proxyAddresses = value;
    };
    /**
     * Gets the rejectedSenders property value. The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable
     * @returns a directoryObject
     */
    public get rejectedSenders() {
        return this._rejectedSenders;
    };
    /**
     * Sets the rejectedSenders property value. The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable
     * @param value Value to set for the rejectedSenders property.
     */
    public set rejectedSenders(value: DirectoryObject[] | undefined) {
        this._rejectedSenders = value;
    };
    /**
     * Gets the renewedDateTime property value. Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @returns a Date
     */
    public get renewedDateTime() {
        return this._renewedDateTime;
    };
    /**
     * Sets the renewedDateTime property value. Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, not, ge, le, in). Read-only.
     * @param value Value to set for the renewedDateTime property.
     */
    public set renewedDateTime(value: Date | undefined) {
        this._renewedDateTime = value;
    };
    /**
     * Gets the resourceBehaviorOptions property value. Specifies the group behaviors that can be set for a Microsoft 365 group during creation. This can be set only as part of creation (POST). Possible values are AllowOnlyMembersToPost, HideGroupInOutlook, SubscribeNewGroupMembers, WelcomeEmailDisabled. For more information, see Set Microsoft 365 group behaviors and provisioning options.
     * @returns a string
     */
    public get resourceBehaviorOptions() {
        return this._resourceBehaviorOptions;
    };
    /**
     * Sets the resourceBehaviorOptions property value. Specifies the group behaviors that can be set for a Microsoft 365 group during creation. This can be set only as part of creation (POST). Possible values are AllowOnlyMembersToPost, HideGroupInOutlook, SubscribeNewGroupMembers, WelcomeEmailDisabled. For more information, see Set Microsoft 365 group behaviors and provisioning options.
     * @param value Value to set for the resourceBehaviorOptions property.
     */
    public set resourceBehaviorOptions(value: string[] | undefined) {
        this._resourceBehaviorOptions = value;
    };
    /**
     * Gets the resourceProvisioningOptions property value. Specifies the group resources that are provisioned as part of Microsoft 365 group creation, that are not normally part of default group creation. Possible value is Team. For more information, see Set Microsoft 365 group behaviors and provisioning options. Returned by default. Supports $filter (eq, not, startsWith.
     * @returns a string
     */
    public get resourceProvisioningOptions() {
        return this._resourceProvisioningOptions;
    };
    /**
     * Sets the resourceProvisioningOptions property value. Specifies the group resources that are provisioned as part of Microsoft 365 group creation, that are not normally part of default group creation. Possible value is Team. For more information, see Set Microsoft 365 group behaviors and provisioning options. Returned by default. Supports $filter (eq, not, startsWith.
     * @param value Value to set for the resourceProvisioningOptions property.
     */
    public set resourceProvisioningOptions(value: string[] | undefined) {
        this._resourceProvisioningOptions = value;
    };
    /**
     * Gets the securityEnabled property value. Specifies whether the group is a security group. Required.Returned by default. Supports $filter (eq, ne, not, in).
     * @returns a boolean
     */
    public get securityEnabled() {
        return this._securityEnabled;
    };
    /**
     * Sets the securityEnabled property value. Specifies whether the group is a security group. Required.Returned by default. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the securityEnabled property.
     */
    public set securityEnabled(value: boolean | undefined) {
        this._securityEnabled = value;
    };
    /**
     * Gets the securityIdentifier property value. Security identifier of the group, used in Windows scenarios. Returned by default.
     * @returns a string
     */
    public get securityIdentifier() {
        return this._securityIdentifier;
    };
    /**
     * Sets the securityIdentifier property value. Security identifier of the group, used in Windows scenarios. Returned by default.
     * @param value Value to set for the securityIdentifier property.
     */
    public set securityIdentifier(value: string | undefined) {
        this._securityIdentifier = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DirectoryObject>("acceptedSenders", this.acceptedSenders);
        writer.writeEnumValue<GroupAccessType>("accessType", this.accessType);
        writer.writeBooleanValue("allowExternalSenders", this.allowExternalSenders);
        writer.writeCollectionOfObjectValues<AppRoleAssignment>("appRoleAssignments", this.appRoleAssignments);
        writer.writeCollectionOfObjectValues<AssignedLabel>("assignedLabels", this.assignedLabels);
        writer.writeCollectionOfObjectValues<AssignedLicense>("assignedLicenses", this.assignedLicenses);
        writer.writeBooleanValue("autoSubscribeNewMembers", this.autoSubscribeNewMembers);
        writer.writeObjectValue<Calendar>("calendar", this.calendar);
        writer.writeCollectionOfObjectValues<Event>("calendarView", this.calendarView);
        writer.writeStringValue("classification", this.classification);
        writer.writeCollectionOfObjectValues<Conversation>("conversations", this.conversations);
        writer.writeStringValue("createdByAppId", this.createdByAppId);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<DirectoryObject>("createdOnBehalfOf", this.createdOnBehalfOf);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<Drive>("drive", this.drive);
        writer.writeCollectionOfObjectValues<Drive>("drives", this.drives);
        writer.writeCollectionOfObjectValues<Endpoint>("endpoints", this.endpoints);
        writer.writeCollectionOfObjectValues<Event>("events", this.events);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeCollectionOfObjectValues<GroupLifecyclePolicy>("groupLifecyclePolicies", this.groupLifecyclePolicies);
        writer.writeCollectionOfPrimitiveValues<string>("groupTypes", this.groupTypes);
        writer.writeBooleanValue("hasMembersWithLicenseErrors", this.hasMembersWithLicenseErrors);
        writer.writeBooleanValue("hideFromAddressLists", this.hideFromAddressLists);
        writer.writeBooleanValue("hideFromOutlookClients", this.hideFromOutlookClients);
        writer.writeCollectionOfPrimitiveValues<string>("infoCatalogs", this.infoCatalogs);
        writer.writeBooleanValue("isArchived", this.isArchived);
        writer.writeBooleanValue("isAssignableToRole", this.isAssignableToRole);
        writer.writeBooleanValue("isFavorite", this.isFavorite);
        writer.writeBooleanValue("isManagementRestricted", this.isManagementRestricted);
        writer.writeBooleanValue("isSubscribedByMail", this.isSubscribedByMail);
        writer.writeObjectValue<LicenseProcessingState>("licenseProcessingState", this.licenseProcessingState);
        writer.writeStringValue("mail", this.mail);
        writer.writeBooleanValue("mailEnabled", this.mailEnabled);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", this.memberOf);
        writer.writeCollectionOfObjectValues<DirectoryObject>("members", this.members);
        writer.writeStringValue("membershipRule", this.membershipRule);
        writer.writeStringValue("membershipRuleProcessingState", this.membershipRuleProcessingState);
        writer.writeObjectValue<MembershipRuleProcessingStatus>("membershipRuleProcessingStatus", this.membershipRuleProcessingStatus);
        writer.writeCollectionOfObjectValues<DirectoryObject>("membersWithLicenseErrors", this.membersWithLicenseErrors);
        writer.writeObjectValue<Onenote>("onenote", this.onenote);
        writer.writeStringValue("onPremisesDomainName", this.onPremisesDomainName);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeStringValue("onPremisesNetBiosName", this.onPremisesNetBiosName);
        writer.writeCollectionOfObjectValues<OnPremisesProvisioningError>("onPremisesProvisioningErrors", this.onPremisesProvisioningErrors);
        writer.writeStringValue("onPremisesSamAccountName", this.onPremisesSamAccountName);
        writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeStringValue("organizationId", this.organizationId);
        writer.writeCollectionOfObjectValues<DirectoryObject>("owners", this.owners);
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrant>("permissionGrants", this.permissionGrants);
        writer.writeObjectValue<ProfilePhoto>("photo", this.photo);
        writer.writeCollectionOfObjectValues<ProfilePhoto>("photos", this.photos);
        writer.writeObjectValue<PlannerGroup>("planner", this.planner);
        writer.writeStringValue("preferredDataLocation", this.preferredDataLocation);
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", this.proxyAddresses);
        writer.writeCollectionOfObjectValues<DirectoryObject>("rejectedSenders", this.rejectedSenders);
        writer.writeDateValue("renewedDateTime", this.renewedDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("resourceBehaviorOptions", this.resourceBehaviorOptions);
        writer.writeCollectionOfPrimitiveValues<string>("resourceProvisioningOptions", this.resourceProvisioningOptions);
        writer.writeBooleanValue("securityEnabled", this.securityEnabled);
        writer.writeStringValue("securityIdentifier", this.securityIdentifier);
        writer.writeCollectionOfObjectValues<DirectorySetting>("settings", this.settings);
        writer.writeCollectionOfObjectValues<Site>("sites", this.sites);
        writer.writeObjectValue<Team>("team", this.team);
        writer.writeStringValue("theme", this.theme);
        writer.writeCollectionOfObjectValues<ConversationThread>("threads", this.threads);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", this.transitiveMemberOf);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMembers", this.transitiveMembers);
        writer.writeNumberValue("unseenConversationsCount", this.unseenConversationsCount);
        writer.writeNumberValue("unseenCount", this.unseenCount);
        writer.writeNumberValue("unseenMessagesCount", this.unseenMessagesCount);
        writer.writeStringValue("visibility", this.visibility);
        writer.writeObjectValue<GroupWritebackConfiguration>("writebackConfiguration", this.writebackConfiguration);
    };
    /**
     * Gets the settings property value. Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable.
     * @returns a directorySetting
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable.
     * @param value Value to set for the settings property.
     */
    public set settings(value: DirectorySetting[] | undefined) {
        this._settings = value;
    };
    /**
     * Gets the sites property value. The list of SharePoint sites in this group. Access the default site with /sites/root.
     * @returns a site
     */
    public get sites() {
        return this._sites;
    };
    /**
     * Sets the sites property value. The list of SharePoint sites in this group. Access the default site with /sites/root.
     * @param value Value to set for the sites property.
     */
    public set sites(value: Site[] | undefined) {
        this._sites = value;
    };
    /**
     * Gets the team property value. The team property
     * @returns a team
     */
    public get team() {
        return this._team;
    };
    /**
     * Sets the team property value. The team property
     * @param value Value to set for the team property.
     */
    public set team(value: Team | undefined) {
        this._team = value;
    };
    /**
     * Gets the theme property value. Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default.
     * @returns a string
     */
    public get theme() {
        return this._theme;
    };
    /**
     * Sets the theme property value. Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default.
     * @param value Value to set for the theme property.
     */
    public set theme(value: string | undefined) {
        this._theme = value;
    };
    /**
     * Gets the threads property value. The group's conversation threads. Nullable.
     * @returns a conversationThread
     */
    public get threads() {
        return this._threads;
    };
    /**
     * Sets the threads property value. The group's conversation threads. Nullable.
     * @param value Value to set for the threads property.
     */
    public set threads(value: ConversationThread[] | undefined) {
        this._threads = value;
    };
    /**
     * Gets the transitiveMemberOf property value. The groups that a group is a member of, either directly and through nested membership. Nullable.
     * @returns a directoryObject
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Sets the transitiveMemberOf property value. The groups that a group is a member of, either directly and through nested membership. Nullable.
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        this._transitiveMemberOf = value;
    };
    /**
     * Gets the transitiveMembers property value. The direct and transitive members of a group. Nullable.
     * @returns a directoryObject
     */
    public get transitiveMembers() {
        return this._transitiveMembers;
    };
    /**
     * Sets the transitiveMembers property value. The direct and transitive members of a group. Nullable.
     * @param value Value to set for the transitiveMembers property.
     */
    public set transitiveMembers(value: DirectoryObject[] | undefined) {
        this._transitiveMembers = value;
    };
    /**
     * Gets the unseenConversationsCount property value. Count of conversations that have been delivered one or more new posts since the signed-in user's last visit to the group. This property is the same as unseenCount. Returned only on $select.
     * @returns a integer
     */
    public get unseenConversationsCount() {
        return this._unseenConversationsCount;
    };
    /**
     * Sets the unseenConversationsCount property value. Count of conversations that have been delivered one or more new posts since the signed-in user's last visit to the group. This property is the same as unseenCount. Returned only on $select.
     * @param value Value to set for the unseenConversationsCount property.
     */
    public set unseenConversationsCount(value: number | undefined) {
        this._unseenConversationsCount = value;
    };
    /**
     * Gets the unseenCount property value. Count of conversations that have received new posts since the signed-in user last visited the group. This property is the same as unseenConversationsCount.Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @returns a integer
     */
    public get unseenCount() {
        return this._unseenCount;
    };
    /**
     * Sets the unseenCount property value. Count of conversations that have received new posts since the signed-in user last visited the group. This property is the same as unseenConversationsCount.Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     * @param value Value to set for the unseenCount property.
     */
    public set unseenCount(value: number | undefined) {
        this._unseenCount = value;
    };
    /**
     * Gets the unseenMessagesCount property value. Count of new posts that have been delivered to the group's conversations since the signed-in user's last visit to the group. Returned only on $select.
     * @returns a integer
     */
    public get unseenMessagesCount() {
        return this._unseenMessagesCount;
    };
    /**
     * Sets the unseenMessagesCount property value. Count of new posts that have been delivered to the group's conversations since the signed-in user's last visit to the group. Returned only on $select.
     * @param value Value to set for the unseenMessagesCount property.
     */
    public set unseenMessagesCount(value: number | undefined) {
        this._unseenMessagesCount = value;
    };
    /**
     * Gets the visibility property value. Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or HiddenMembership. HiddenMembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable.
     * @returns a string
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * Sets the visibility property value. Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or HiddenMembership. HiddenMembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. Groups assignable to roles are always Private. See group visibility options to learn more. Returned by default. Nullable.
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: string | undefined) {
        this._visibility = value;
    };
    /**
     * Gets the writebackConfiguration property value. The writebackConfiguration property
     * @returns a groupWritebackConfiguration
     */
    public get writebackConfiguration() {
        return this._writebackConfiguration;
    };
    /**
     * Sets the writebackConfiguration property value. The writebackConfiguration property
     * @param value Value to set for the writebackConfiguration property.
     */
    public set writebackConfiguration(value: GroupWritebackConfiguration | undefined) {
        this._writebackConfiguration = value;
    };
}
