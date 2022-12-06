import {BucketAggregationSortProperty} from './bucketAggregationSortProperty';
import {BucketAggregationDefinition} from './index';
import {serializeBucketAggregationRange} from './serializeBucketAggregationRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBucketAggregationDefinition(writer: SerializationWriter, bucketAggregationDefinition: BucketAggregationDefinition | undefined = {}) : void {
            writer.writeBooleanValue("isDescending", bucketAggregationDefinition.isDescending);
            writer.writeNumberValue("minimumCount", bucketAggregationDefinition.minimumCount);
            writer.writeStringValue("@odata.type", bucketAggregationDefinition.odataType);
            writer.writeStringValue("prefixFilter", bucketAggregationDefinition.prefixFilter);
            writer.writeCollectionOfObjectValuesFromMethod("ranges", bucketAggregationDefinition.ranges as any, serializeBucketAggregationRange);
            writer.writeEnumValue<BucketAggregationSortProperty>("sortBy", bucketAggregationDefinition.sortBy);
}
