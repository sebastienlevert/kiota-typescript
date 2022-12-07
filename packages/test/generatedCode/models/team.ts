import {createChannelFromDiscriminatorValue} from './createChannelFromDiscriminatorValue';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from './createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {createScheduleFromDiscriminatorValue} from './createScheduleFromDiscriminatorValue';
import {createTeamDiscoverySettingsFromDiscriminatorValue} from './createTeamDiscoverySettingsFromDiscriminatorValue';
import {createTeamFunSettingsFromDiscriminatorValue} from './createTeamFunSettingsFromDiscriminatorValue';
import {createTeamGuestSettingsFromDiscriminatorValue} from './createTeamGuestSettingsFromDiscriminatorValue';
import {createTeamMemberSettingsFromDiscriminatorValue} from './createTeamMemberSettingsFromDiscriminatorValue';
import {createTeamMessagingSettingsFromDiscriminatorValue} from './createTeamMessagingSettingsFromDiscriminatorValue';
import {createTeamsAppInstallationFromDiscriminatorValue} from './createTeamsAppInstallationFromDiscriminatorValue';
import {createTeamsAsyncOperationFromDiscriminatorValue} from './createTeamsAsyncOperationFromDiscriminatorValue';
import {createTeamsTemplateFromDiscriminatorValue} from './createTeamsTemplateFromDiscriminatorValue';
import {createTeamSummaryFromDiscriminatorValue} from './createTeamSummaryFromDiscriminatorValue';
import {createTeamTemplateDefinitionFromDiscriminatorValue} from './createTeamTemplateDefinitionFromDiscriminatorValue';
import {createTeamworkTagFromDiscriminatorValue} from './createTeamworkTagFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {Channel, ConversationMember, Entity, Group, ProfilePhoto, ResourceSpecificPermissionGrant, Schedule, TeamDiscoverySettings, TeamFunSettings, TeamGuestSettings, TeamMemberSettings, TeamMessagingSettings, TeamsAppInstallation, TeamsAsyncOperation, TeamsTemplate, TeamSummary, TeamTemplateDefinition, TeamworkTag, User} from './index';
import {TeamSpecialization} from './teamSpecialization';
import {TeamVisibilityType} from './teamVisibilityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Team extends Entity implements Parsable {
    /** List of channels either hosted in or shared with the team (incoming channels). */
    private _allChannels?: Channel[] | undefined;
    /** The collection of channels and messages associated with the team. */
    private _channels?: Channel[] | undefined;
    /** An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured set in the tenant's directory. */
    private _classification?: string | undefined;
    /** Timestamp at which the team was created. */
    private _createdDateTime?: Date | undefined;
    /** An optional description for the team. Maximum length: 1024 characters. */
    private _description?: string | undefined;
    /** The discoverySettings property */
    private _discoverySettings?: TeamDiscoverySettings | undefined;
    /** The name of the team. */
    private _displayName?: string | undefined;
    /** The funSettings property */
    private _funSettings?: TeamFunSettings | undefined;
    /** The group property */
    private _group?: Group | undefined;
    /** The guestSettings property */
    private _guestSettings?: TeamGuestSettings | undefined;
    /** List of channels shared with the team. */
    private _incomingChannels?: Channel[] | undefined;
    /** The apps installed in this team. */
    private _installedApps?: TeamsAppInstallation[] | undefined;
    /** A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API. */
    private _internalId?: string | undefined;
    /** Whether this team is in read-only mode. */
    private _isArchived?: boolean | undefined;
    /** If set to true, the team is currently in the owner-only team membership state and not accessible by other team members, such as students. */
    private _isMembershipLimitedToOwners?: boolean | undefined;
    /** Members and owners of the team. */
    private _members?: ConversationMember[] | undefined;
    /** The memberSettings property */
    private _memberSettings?: TeamMemberSettings | undefined;
    /** The messagingSettings property */
    private _messagingSettings?: TeamMessagingSettings | undefined;
    /** The async operations that ran or are running on this team. */
    private _operations?: TeamsAsyncOperation[] | undefined;
    /** The list of this team's owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user delegated permissions, no owner can be specified (the current user is the owner). Owner must be specified as an object ID (GUID), not a UPN. */
    private _owners?: User[] | undefined;
    /** A collection of permissions granted to apps to access the team. */
    private _permissionGrants?: ResourceSpecificPermissionGrant[] | undefined;
    /** The photo property */
    private _photo?: ProfilePhoto | undefined;
    /** The primaryChannel property */
    private _primaryChannel?: Channel | undefined;
    /** The schedule property */
    private _schedule?: Schedule | undefined;
    /** The specialization property */
    private _specialization?: TeamSpecialization | undefined;
    /** The summary property */
    private _summary?: TeamSummary | undefined;
    /** The tags associated with the team. */
    private _tags?: TeamworkTag[] | undefined;
    /** The template property */
    private _template?: TeamsTemplate | undefined;
    /** The templateDefinition property */
    private _templateDefinition?: TeamTemplateDefinition | undefined;
    /** The ID of the Azure Active Directory tenant. */
    private _tenantId?: string | undefined;
    /** The visibility property */
    private _visibility?: TeamVisibilityType | undefined;
    /** A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed. */
    private _webUrl?: string | undefined;
    /**
     * Gets the allChannels property value. List of channels either hosted in or shared with the team (incoming channels).
     * @returns a channel
     */
    public get allChannels() {
        return this._allChannels;
    };
    /**
     * Sets the allChannels property value. List of channels either hosted in or shared with the team (incoming channels).
     * @param value Value to set for the allChannels property.
     */
    public set allChannels(value: Channel[] | undefined) {
        this._allChannels = value;
    };
    /**
     * Gets the channels property value. The collection of channels and messages associated with the team.
     * @returns a channel
     */
    public get channels() {
        return this._channels;
    };
    /**
     * Sets the channels property value. The collection of channels and messages associated with the team.
     * @param value Value to set for the channels property.
     */
    public set channels(value: Channel[] | undefined) {
        this._channels = value;
    };
    /**
     * Gets the classification property value. An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured set in the tenant's directory.
     * @returns a string
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Sets the classification property value. An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured set in the tenant's directory.
     * @param value Value to set for the classification property.
     */
    public set classification(value: string | undefined) {
        this._classification = value;
    };
    /**
     * Instantiates a new team and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Timestamp at which the team was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Timestamp at which the team was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. An optional description for the team. Maximum length: 1024 characters.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. An optional description for the team. Maximum length: 1024 characters.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the discoverySettings property value. The discoverySettings property
     * @returns a teamDiscoverySettings
     */
    public get discoverySettings() {
        return this._discoverySettings;
    };
    /**
     * Sets the discoverySettings property value. The discoverySettings property
     * @param value Value to set for the discoverySettings property.
     */
    public set discoverySettings(value: TeamDiscoverySettings | undefined) {
        this._discoverySettings = value;
    };
    /**
     * Gets the displayName property value. The name of the team.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the team.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the funSettings property value. The funSettings property
     * @returns a teamFunSettings
     */
    public get funSettings() {
        return this._funSettings;
    };
    /**
     * Sets the funSettings property value. The funSettings property
     * @param value Value to set for the funSettings property.
     */
    public set funSettings(value: TeamFunSettings | undefined) {
        this._funSettings = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allChannels": n => { this.allChannels = n.getCollectionOfObjectValues<Channel>(createChannelFromDiscriminatorValue); },
            "channels": n => { this.channels = n.getCollectionOfObjectValues<Channel>(createChannelFromDiscriminatorValue); },
            "classification": n => { this.classification = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "discoverySettings": n => { this.discoverySettings = n.getObjectValue<TeamDiscoverySettings>(createTeamDiscoverySettingsFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "funSettings": n => { this.funSettings = n.getObjectValue<TeamFunSettings>(createTeamFunSettingsFromDiscriminatorValue); },
            "group": n => { this.group = n.getObjectValue<Group>(createGroupFromDiscriminatorValue); },
            "guestSettings": n => { this.guestSettings = n.getObjectValue<TeamGuestSettings>(createTeamGuestSettingsFromDiscriminatorValue); },
            "incomingChannels": n => { this.incomingChannels = n.getCollectionOfObjectValues<Channel>(createChannelFromDiscriminatorValue); },
            "installedApps": n => { this.installedApps = n.getCollectionOfObjectValues<TeamsAppInstallation>(createTeamsAppInstallationFromDiscriminatorValue); },
            "internalId": n => { this.internalId = n.getStringValue(); },
            "isArchived": n => { this.isArchived = n.getBooleanValue(); },
            "isMembershipLimitedToOwners": n => { this.isMembershipLimitedToOwners = n.getBooleanValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
            "memberSettings": n => { this.memberSettings = n.getObjectValue<TeamMemberSettings>(createTeamMemberSettingsFromDiscriminatorValue); },
            "messagingSettings": n => { this.messagingSettings = n.getObjectValue<TeamMessagingSettings>(createTeamMessagingSettingsFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<TeamsAsyncOperation>(createTeamsAsyncOperationFromDiscriminatorValue); },
            "owners": n => { this.owners = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
            "permissionGrants": n => { this.permissionGrants = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrant>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
            "photo": n => { this.photo = n.getObjectValue<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); },
            "primaryChannel": n => { this.primaryChannel = n.getObjectValue<Channel>(createChannelFromDiscriminatorValue); },
            "schedule": n => { this.schedule = n.getObjectValue<Schedule>(createScheduleFromDiscriminatorValue); },
            "specialization": n => { this.specialization = n.getEnumValue<TeamSpecialization>(TeamSpecialization); },
            "summary": n => { this.summary = n.getObjectValue<TeamSummary>(createTeamSummaryFromDiscriminatorValue); },
            "tags": n => { this.tags = n.getCollectionOfObjectValues<TeamworkTag>(createTeamworkTagFromDiscriminatorValue); },
            "template": n => { this.template = n.getObjectValue<TeamsTemplate>(createTeamsTemplateFromDiscriminatorValue); },
            "templateDefinition": n => { this.templateDefinition = n.getObjectValue<TeamTemplateDefinition>(createTeamTemplateDefinitionFromDiscriminatorValue); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "visibility": n => { this.visibility = n.getEnumValue<TeamVisibilityType>(TeamVisibilityType); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the group property value. The group property
     * @returns a group
     */
    public get group() {
        return this._group;
    };
    /**
     * Sets the group property value. The group property
     * @param value Value to set for the group property.
     */
    public set group(value: Group | undefined) {
        this._group = value;
    };
    /**
     * Gets the guestSettings property value. The guestSettings property
     * @returns a teamGuestSettings
     */
    public get guestSettings() {
        return this._guestSettings;
    };
    /**
     * Sets the guestSettings property value. The guestSettings property
     * @param value Value to set for the guestSettings property.
     */
    public set guestSettings(value: TeamGuestSettings | undefined) {
        this._guestSettings = value;
    };
    /**
     * Gets the incomingChannels property value. List of channels shared with the team.
     * @returns a channel
     */
    public get incomingChannels() {
        return this._incomingChannels;
    };
    /**
     * Sets the incomingChannels property value. List of channels shared with the team.
     * @param value Value to set for the incomingChannels property.
     */
    public set incomingChannels(value: Channel[] | undefined) {
        this._incomingChannels = value;
    };
    /**
     * Gets the installedApps property value. The apps installed in this team.
     * @returns a teamsAppInstallation
     */
    public get installedApps() {
        return this._installedApps;
    };
    /**
     * Sets the installedApps property value. The apps installed in this team.
     * @param value Value to set for the installedApps property.
     */
    public set installedApps(value: TeamsAppInstallation[] | undefined) {
        this._installedApps = value;
    };
    /**
     * Gets the internalId property value. A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API.
     * @returns a string
     */
    public get internalId() {
        return this._internalId;
    };
    /**
     * Sets the internalId property value. A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API.
     * @param value Value to set for the internalId property.
     */
    public set internalId(value: string | undefined) {
        this._internalId = value;
    };
    /**
     * Gets the isArchived property value. Whether this team is in read-only mode.
     * @returns a boolean
     */
    public get isArchived() {
        return this._isArchived;
    };
    /**
     * Sets the isArchived property value. Whether this team is in read-only mode.
     * @param value Value to set for the isArchived property.
     */
    public set isArchived(value: boolean | undefined) {
        this._isArchived = value;
    };
    /**
     * Gets the isMembershipLimitedToOwners property value. If set to true, the team is currently in the owner-only team membership state and not accessible by other team members, such as students.
     * @returns a boolean
     */
    public get isMembershipLimitedToOwners() {
        return this._isMembershipLimitedToOwners;
    };
    /**
     * Sets the isMembershipLimitedToOwners property value. If set to true, the team is currently in the owner-only team membership state and not accessible by other team members, such as students.
     * @param value Value to set for the isMembershipLimitedToOwners property.
     */
    public set isMembershipLimitedToOwners(value: boolean | undefined) {
        this._isMembershipLimitedToOwners = value;
    };
    /**
     * Gets the members property value. Members and owners of the team.
     * @returns a conversationMember
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. Members and owners of the team.
     * @param value Value to set for the members property.
     */
    public set members(value: ConversationMember[] | undefined) {
        this._members = value;
    };
    /**
     * Gets the memberSettings property value. The memberSettings property
     * @returns a teamMemberSettings
     */
    public get memberSettings() {
        return this._memberSettings;
    };
    /**
     * Sets the memberSettings property value. The memberSettings property
     * @param value Value to set for the memberSettings property.
     */
    public set memberSettings(value: TeamMemberSettings | undefined) {
        this._memberSettings = value;
    };
    /**
     * Gets the messagingSettings property value. The messagingSettings property
     * @returns a teamMessagingSettings
     */
    public get messagingSettings() {
        return this._messagingSettings;
    };
    /**
     * Sets the messagingSettings property value. The messagingSettings property
     * @param value Value to set for the messagingSettings property.
     */
    public set messagingSettings(value: TeamMessagingSettings | undefined) {
        this._messagingSettings = value;
    };
    /**
     * Gets the operations property value. The async operations that ran or are running on this team.
     * @returns a teamsAsyncOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The async operations that ran or are running on this team.
     * @param value Value to set for the operations property.
     */
    public set operations(value: TeamsAsyncOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Gets the owners property value. The list of this team's owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user delegated permissions, no owner can be specified (the current user is the owner). Owner must be specified as an object ID (GUID), not a UPN.
     * @returns a user
     */
    public get owners() {
        return this._owners;
    };
    /**
     * Sets the owners property value. The list of this team's owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user delegated permissions, no owner can be specified (the current user is the owner). Owner must be specified as an object ID (GUID), not a UPN.
     * @param value Value to set for the owners property.
     */
    public set owners(value: User[] | undefined) {
        this._owners = value;
    };
    /**
     * Gets the permissionGrants property value. A collection of permissions granted to apps to access the team.
     * @returns a resourceSpecificPermissionGrant
     */
    public get permissionGrants() {
        return this._permissionGrants;
    };
    /**
     * Sets the permissionGrants property value. A collection of permissions granted to apps to access the team.
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
     * Gets the primaryChannel property value. The primaryChannel property
     * @returns a channel
     */
    public get primaryChannel() {
        return this._primaryChannel;
    };
    /**
     * Sets the primaryChannel property value. The primaryChannel property
     * @param value Value to set for the primaryChannel property.
     */
    public set primaryChannel(value: Channel | undefined) {
        this._primaryChannel = value;
    };
    /**
     * Gets the schedule property value. The schedule property
     * @returns a schedule
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. The schedule property
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: Schedule | undefined) {
        this._schedule = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Channel>("allChannels", this.allChannels);
        writer.writeCollectionOfObjectValues<Channel>("channels", this.channels);
        writer.writeStringValue("classification", this.classification);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeObjectValue<TeamDiscoverySettings>("discoverySettings", this.discoverySettings);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<TeamFunSettings>("funSettings", this.funSettings);
        writer.writeObjectValue<Group>("group", this.group);
        writer.writeObjectValue<TeamGuestSettings>("guestSettings", this.guestSettings);
        writer.writeCollectionOfObjectValues<Channel>("incomingChannels", this.incomingChannels);
        writer.writeCollectionOfObjectValues<TeamsAppInstallation>("installedApps", this.installedApps);
        writer.writeStringValue("internalId", this.internalId);
        writer.writeBooleanValue("isArchived", this.isArchived);
        writer.writeBooleanValue("isMembershipLimitedToOwners", this.isMembershipLimitedToOwners);
        writer.writeCollectionOfObjectValues<ConversationMember>("members", this.members);
        writer.writeObjectValue<TeamMemberSettings>("memberSettings", this.memberSettings);
        writer.writeObjectValue<TeamMessagingSettings>("messagingSettings", this.messagingSettings);
        writer.writeCollectionOfObjectValues<TeamsAsyncOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<User>("owners", this.owners);
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrant>("permissionGrants", this.permissionGrants);
        writer.writeObjectValue<ProfilePhoto>("photo", this.photo);
        writer.writeObjectValue<Channel>("primaryChannel", this.primaryChannel);
        writer.writeObjectValue<Schedule>("schedule", this.schedule);
        writer.writeEnumValue<TeamSpecialization>("specialization", this.specialization);
        writer.writeObjectValue<TeamSummary>("summary", this.summary);
        writer.writeCollectionOfObjectValues<TeamworkTag>("tags", this.tags);
        writer.writeObjectValue<TeamsTemplate>("template", this.template);
        writer.writeObjectValue<TeamTemplateDefinition>("templateDefinition", this.templateDefinition);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeEnumValue<TeamVisibilityType>("visibility", this.visibility);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the specialization property value. The specialization property
     * @returns a teamSpecialization
     */
    public get specialization() {
        return this._specialization;
    };
    /**
     * Sets the specialization property value. The specialization property
     * @param value Value to set for the specialization property.
     */
    public set specialization(value: TeamSpecialization | undefined) {
        this._specialization = value;
    };
    /**
     * Gets the summary property value. The summary property
     * @returns a teamSummary
     */
    public get summary() {
        return this._summary;
    };
    /**
     * Sets the summary property value. The summary property
     * @param value Value to set for the summary property.
     */
    public set summary(value: TeamSummary | undefined) {
        this._summary = value;
    };
    /**
     * Gets the tags property value. The tags associated with the team.
     * @returns a teamworkTag
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. The tags associated with the team.
     * @param value Value to set for the tags property.
     */
    public set tags(value: TeamworkTag[] | undefined) {
        this._tags = value;
    };
    /**
     * Gets the template property value. The template property
     * @returns a teamsTemplate
     */
    public get template() {
        return this._template;
    };
    /**
     * Sets the template property value. The template property
     * @param value Value to set for the template property.
     */
    public set template(value: TeamsTemplate | undefined) {
        this._template = value;
    };
    /**
     * Gets the templateDefinition property value. The templateDefinition property
     * @returns a teamTemplateDefinition
     */
    public get templateDefinition() {
        return this._templateDefinition;
    };
    /**
     * Sets the templateDefinition property value. The templateDefinition property
     * @param value Value to set for the templateDefinition property.
     */
    public set templateDefinition(value: TeamTemplateDefinition | undefined) {
        this._templateDefinition = value;
    };
    /**
     * Gets the tenantId property value. The ID of the Azure Active Directory tenant.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The ID of the Azure Active Directory tenant.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
    /**
     * Gets the visibility property value. The visibility property
     * @returns a teamVisibilityType
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * Sets the visibility property value. The visibility property
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: TeamVisibilityType | undefined) {
        this._visibility = value;
    };
    /**
     * Gets the webUrl property value. A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
