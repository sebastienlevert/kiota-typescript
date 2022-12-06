import {IdentitySet, TeamworkConversationIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageMentionedIdentitySet extends IdentitySet, Partial<Parsable> {
    /** If present, represents a conversation (for example, team or channel) @mentioned in a message. */
    conversation?: TeamworkConversationIdentity;
}
