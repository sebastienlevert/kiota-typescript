import {IdentitySet, TeamworkConversationIdentity, TeamworkTagIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageMentionedIdentitySet extends IdentitySet, Partial<Parsable> {
    /** The conversation property */
    conversation?: TeamworkConversationIdentity;
    /** The tag property */
    tag?: TeamworkTagIdentity;
}
