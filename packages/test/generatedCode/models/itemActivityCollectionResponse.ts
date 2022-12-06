import {BaseCollectionPaginationCountResponse, ItemActivity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ItemActivity[];
}
