import {ConversationMember} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SkypeUserConversationMember extends ConversationMember, Partial<Parsable> {
    /** The skypeId property */
    skypeId?: string;
}
