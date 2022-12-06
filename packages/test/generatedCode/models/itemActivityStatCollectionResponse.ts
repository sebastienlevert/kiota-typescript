import {BaseCollectionPaginationCountResponse, ItemActivityStat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityStatCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ItemActivityStat[];
}
