import {BaseCollectionPaginationCountResponse, ChatMessage} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAllMessagesResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ChatMessage[];
}
