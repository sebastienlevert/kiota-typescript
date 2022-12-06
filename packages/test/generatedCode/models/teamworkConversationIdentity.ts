import {Identity} from './index';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkConversationIdentity extends Identity, Partial<Parsable> {
    /** Type of conversation. Possible values are: team, channel, chat, and unknownFutureValue. */
    conversationIdentityType?: TeamworkConversationIdentityType;
}
