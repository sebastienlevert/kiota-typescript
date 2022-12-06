import {AnonymousGuestConversationMember, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AnonymousGuestConversationMemberCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AnonymousGuestConversationMember[];
}
