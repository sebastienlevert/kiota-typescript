import {BaseCollectionPaginationCountResponse, SkypeUserConversationMember} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SkypeUserConversationMemberCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SkypeUserConversationMember[];
}
