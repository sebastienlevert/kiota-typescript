import {ConversationMember, TeamInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedWithChannelTeamInfo extends Partial<Parsable>, TeamInfo {
    /** A collection of team members who have access to the shared channel. */
    allowedMembers?: ConversationMember[];
    /** Indicates whether the team is the host of the channel. */
    isHostTeam?: boolean;
}
