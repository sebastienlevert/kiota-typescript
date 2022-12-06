import {BaseCollectionPaginationCountResponse, BucketAggregationRange} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BucketAggregationRangeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BucketAggregationRange[];
}
