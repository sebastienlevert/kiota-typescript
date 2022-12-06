import {Channel, ConversationMember, Entity, Group, ProfilePhoto, Schedule, TeamFunSettings, TeamGuestSettings, TeamMemberSettings, TeamMessagingSettings, TeamsAppInstallation, TeamsAsyncOperation, TeamsTemplate, TeamSummary, TeamworkTag} from './index';
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
    /** The name of the team. */
    displayName?: string;
    /** Settings to configure use of Giphy, memes, and stickers in the team. */
    funSettings?: TeamFunSettings;
    /** The group property */
    group?: Group;
    /** Settings to configure whether guests can create, update, or delete channels in the team. */
    guestSettings?: TeamGuestSettings;
    /** List of channels shared with the team. */
    incomingChannels?: Channel[];
    /** The apps installed in this team. */
    installedApps?: TeamsAppInstallation[];
    /** A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API. */
    internalId?: string;
    /** Whether this team is in read-only mode. */
    isArchived?: boolean;
    /** Members and owners of the team. */
    members?: ConversationMember[];
    /** Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the team. */
    memberSettings?: TeamMemberSettings;
    /** Settings to configure messaging and mentions in the team. */
    messagingSettings?: TeamMessagingSettings;
    /** The async operations that ran or are running on this team. */
    operations?: TeamsAsyncOperation[];
    /** The profile photo for the team. */
    photo?: ProfilePhoto;
    /** The general channel for the team. */
    primaryChannel?: Channel;
    /** The schedule of shifts for this team. */
    schedule?: Schedule;
    /** Optional. Indicates whether the team is intended for a particular use case.  Each team specialization has access to unique behaviors and experiences targeted to its use case. */
    specialization?: TeamSpecialization;
    /** The summary property */
    summary?: TeamSummary;
    /** The tags associated with the team. */
    tags?: TeamworkTag[];
    /** The template this team was created from. See available templates. */
    template?: TeamsTemplate;
    /** The ID of the Azure Active Directory tenant. */
    tenantId?: string;
    /** The visibility of the group and team. Defaults to Public. */
    visibility?: TeamVisibilityType;
    /** A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed. */
    webUrl?: string;
}
