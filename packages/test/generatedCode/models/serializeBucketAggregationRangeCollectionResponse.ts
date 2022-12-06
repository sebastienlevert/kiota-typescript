import {BucketAggregationRangeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBucketAggregationRange} from './serializeBucketAggregationRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBucketAggregationRangeCollectionResponse(writer: SerializationWriter, bucketAggregationRangeCollectionResponse: BucketAggregationRangeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bucketAggregationRangeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bucketAggregationRangeCollectionResponse.value as any, serializeBucketAggregationRange);
}
