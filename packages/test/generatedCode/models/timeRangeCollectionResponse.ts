import {BaseCollectionPaginationCountResponse, TimeRange} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeRangeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TimeRange[];
}
