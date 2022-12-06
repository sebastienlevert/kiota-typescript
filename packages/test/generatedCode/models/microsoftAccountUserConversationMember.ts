import {ConversationMember} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAccountUserConversationMember extends ConversationMember, Partial<Parsable> {
    /** The userId property */
    userId?: string;
}
