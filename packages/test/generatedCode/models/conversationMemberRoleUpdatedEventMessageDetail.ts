import {EventMessageDetail, IdentitySet, TeamworkUserIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationMemberRoleUpdatedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Roles for the coversation member user. */
    conversationMemberRoles?: string[];
    /** Identity of the conversation member user. */
    conversationMemberUser?: TeamworkUserIdentity;
    /** Initiator of the event. */
    initiator?: IdentitySet;
}
