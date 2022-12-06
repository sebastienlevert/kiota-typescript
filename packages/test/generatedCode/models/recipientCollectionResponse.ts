import {BaseCollectionPaginationCountResponse, Recipient} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RecipientCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Recipient[];
}
