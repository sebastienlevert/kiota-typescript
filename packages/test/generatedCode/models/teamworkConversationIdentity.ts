import {Identity} from './index';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkConversationIdentity extends Identity, Partial<Parsable> {
    /** The conversationIdentityType property */
    conversationIdentityType?: TeamworkConversationIdentityType;
}
