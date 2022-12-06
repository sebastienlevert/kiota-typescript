import {ConversationMember} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AnonymousGuestConversationMember extends ConversationMember, Partial<Parsable> {
    /** The anonymousGuestId property */
    anonymousGuestId?: string;
}
