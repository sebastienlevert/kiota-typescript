import {BucketAggregationRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBucketAggregationRange(writer: SerializationWriter, bucketAggregationRange: BucketAggregationRange | undefined = {}) : void {
            writer.writeStringValue("from", bucketAggregationRange.from);
            writer.writeStringValue("@odata.type", bucketAggregationRange.odataType);
            writer.writeStringValue("to", bucketAggregationRange.to);
}
