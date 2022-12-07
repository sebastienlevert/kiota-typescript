import {Channel, ConversationMember, Entity, Group, ProfilePhoto, ResourceSpecificPermissionGrant, Schedule, TeamDiscoverySettings, TeamFunSettings, TeamGuestSettings, TeamMemberSettings, TeamMessagingSettings, TeamsAppInstallation, TeamsAsyncOperation, TeamsTemplate, TeamSummary, TeamTemplateDefinition, TeamworkTag, User} from './index';
import {TeamSpecialization} from './teamSpecialization';
import {TeamVisibilityType} from './teamVisibilityType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Team extends Entity, Partial<Parsable> {
    /** List of channels either hosted in or shared with the team (incoming channels). */
    allChannels?: Channel[];
    /** The collection of channels and messages associated with the team. */
    channels?: Channel[];
    /** An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured set in the tenant's directory. */
    classification?: string;
    /** Timestamp at which the team was created. */
    createdDateTime?: Date;
    /** An optional description for the team. Maximum length: 1024 characters. */
    description?: string;
    /** The discoverySettings property */
    discoverySettings?: TeamDiscoverySettings;
    /** The name of the team. */
    displayName?: string;
    /** The funSettings property */
    funSettings?: TeamFunSettings;
    /** The group property */
    group?: Group;
    /** The guestSettings property */
    guestSettings?: TeamGuestSettings;
    /** List of channels shared with the team. */
    incomingChannels?: Channel[];
    /** The apps installed in this team. */
    installedApps?: TeamsAppInstallation[];
    /** A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API. */
    internalId?: string;
    /** Whether this team is in read-only mode. */
    isArchived?: boolean;
    /** If set to true, the team is currently in the owner-only team membership state and not accessible by other team members, such as students. */
    isMembershipLimitedToOwners?: boolean;
    /** Members and owners of the team. */
    members?: ConversationMember[];
    /** The memberSettings property */
    memberSettings?: TeamMemberSettings;
    /** The messagingSettings property */
    messagingSettings?: TeamMessagingSettings;
    /** The async operations that ran or are running on this team. */
    operations?: TeamsAsyncOperation[];
    /** The list of this team's owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user delegated permissions, no owner can be specified (the current user is the owner). Owner must be specified as an object ID (GUID), not a UPN. */
    owners?: User[];
    /** A collection of permissions granted to apps to access the team. */
    permissionGrants?: ResourceSpecificPermissionGrant[];
    /** The photo property */
    photo?: ProfilePhoto;
    /** The primaryChannel property */
    primaryChannel?: Channel;
    /** The schedule property */
    schedule?: Schedule;
    /** The specialization property */
    specialization?: TeamSpecialization;
    /** The summary property */
    summary?: TeamSummary;
    /** The tags associated with the team. */
    tags?: TeamworkTag[];
    /** The template property */
    template?: TeamsTemplate;
    /** The templateDefinition property */
    templateDefinition?: TeamTemplateDefinition;
    /** The ID of the Azure Active Directory tenant. */
    tenantId?: string;
    /** The visibility property */
    visibility?: TeamVisibilityType;
    /** A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed. */
    webUrl?: string;
}
