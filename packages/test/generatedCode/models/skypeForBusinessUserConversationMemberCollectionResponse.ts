import {BaseCollectionPaginationCountResponse, SkypeForBusinessUserConversationMember} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SkypeForBusinessUserConversationMemberCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SkypeForBusinessUserConversationMember[];
}
