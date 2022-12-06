import {BaseCollectionPaginationCountResponse, ChatMessage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ChatMessage[];
}
