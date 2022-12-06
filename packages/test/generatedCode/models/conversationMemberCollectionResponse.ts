import {BaseCollectionPaginationCountResponse, ConversationMember} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationMemberCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ConversationMember[];
}
