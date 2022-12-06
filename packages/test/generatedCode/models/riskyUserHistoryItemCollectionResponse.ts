import {BaseCollectionPaginationCountResponse, RiskyUserHistoryItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyUserHistoryItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RiskyUserHistoryItem[];
}
