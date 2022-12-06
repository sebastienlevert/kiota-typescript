import {BucketAggregationSortProperty} from './bucketAggregationSortProperty';
import {BucketAggregationRange} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BucketAggregationDefinition extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** True to specify the sort order as descending. The default is false, with the sort order as ascending. Optional. */
    isDescending?: boolean;
    /** The minimum number of items that should be present in the aggregation to be returned in a bucket. Optional. */
    minimumCount?: number;
    /** The OdataType property */
    odataType?: string;
    /** A filter to define a matching criteria. The key should start with the specified prefix to be returned in the response. Optional. */
    prefixFilter?: string;
    /** Specifies the manual ranges to compute the aggregations. This is only valid for non-string refiners of date or numeric type. Optional. */
    ranges?: BucketAggregationRange[];
    /** The sortBy property */
    sortBy?: BucketAggregationSortProperty;
}
