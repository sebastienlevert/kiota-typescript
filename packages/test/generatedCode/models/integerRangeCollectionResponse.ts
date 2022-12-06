import {BaseCollectionPaginationCountResponse, IntegerRange} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IntegerRangeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IntegerRange[];
}
