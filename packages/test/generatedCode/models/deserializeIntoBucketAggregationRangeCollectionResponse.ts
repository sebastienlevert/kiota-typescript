import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBucketAggregationRange} from './deserializeIntoBucketAggregationRange';
import {BucketAggregationRangeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBucketAggregationRangeCollectionResponse(bucketAggregationRangeCollectionResponse: BucketAggregationRangeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bucketAggregationRangeCollectionResponse),
        "value": n => { bucketAggregationRangeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBucketAggregationRange) as any ; },
    }
}
