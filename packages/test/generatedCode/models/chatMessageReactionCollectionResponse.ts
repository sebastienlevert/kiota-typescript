import {BaseCollectionPaginationCountResponse, ChatMessageReaction} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageReactionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ChatMessageReaction[];
}
