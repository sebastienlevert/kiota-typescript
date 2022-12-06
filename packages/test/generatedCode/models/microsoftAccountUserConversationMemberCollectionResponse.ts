import {BaseCollectionPaginationCountResponse, MicrosoftAccountUserConversationMember} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAccountUserConversationMemberCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MicrosoftAccountUserConversationMember[];
}
