import {BaseCollectionPaginationCountResponse, ConversationThread} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationThreadCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ConversationThread[];
}
