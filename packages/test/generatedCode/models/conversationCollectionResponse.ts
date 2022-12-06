import {BaseCollectionPaginationCountResponse, Conversation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Conversation[];
}
