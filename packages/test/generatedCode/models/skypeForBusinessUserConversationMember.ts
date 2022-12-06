import {ConversationMember} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SkypeForBusinessUserConversationMember extends ConversationMember, Partial<Parsable> {
    /** The tenantId property */
    tenantId?: string;
    /** The userId property */
    userId?: string;
}
