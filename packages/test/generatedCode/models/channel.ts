import {ChannelMembershipType} from './channelMembershipType';
import {ChannelModerationSettings, ChannelSummary, ChatMessage, ConversationMember, DriveItem, Entity, SharedWithChannelTeamInfo, TeamsTab} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Channel extends Entity, Partial<Parsable> {
    /** Read only. Timestamp at which the channel was created. */
    createdDateTime?: Date;
    /** Optional textual description for the channel. */
    description?: string;
    /** Channel name as it will appear to the user in Microsoft Teams. The maximum length is 50 characters. */
    displayName?: string;
    /** The email address for sending messages to the channel. Read-only. */
    email?: string;
    /** The filesFolder property */
    filesFolder?: DriveItem;
    /** Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set programmatically with Create team. Default: false. */
    isFavoriteByDefault?: boolean;
    /** A collection of membership records associated with the channel. */
    members?: ConversationMember[];
    /** The membershipType property */
    membershipType?: ChannelMembershipType;
    /** A collection of all the messages in the channel. A navigation property. Nullable. */
    messages?: ChatMessage[];
    /** The moderationSettings property */
    moderationSettings?: ChannelModerationSettings;
    /** A collection of teams with which a channel is shared. */
    sharedWithTeams?: SharedWithChannelTeamInfo[];
    /** The summary property */
    summary?: ChannelSummary;
    /** A collection of all the tabs in the channel. A navigation property. */
    tabs?: TeamsTab[];
    /** The ID of the Azure Active Directory tenant. */
    tenantId?: string;
    /** A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed. Read-only. */
    webUrl?: string;
}
