import {ConversationMember, User} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AadUserConversationMember extends ConversationMember, Partial<Parsable> {
    /** The email address of the user. */
    email?: string;
    /** TenantId which the Azure AD user belongs to. */
    tenantId?: string;
    /** The user property */
    user?: User;
    /** The guid of the user. */
    userId?: string;
}
