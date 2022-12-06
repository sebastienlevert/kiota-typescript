import {BucketAggregationRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBucketAggregationRange(bucketAggregationRange: BucketAggregationRange | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "from": n => { bucketAggregationRange.from = n.getStringValue() as any ; },
        "@odata.type": n => { bucketAggregationRange.odataType = n.getStringValue() as any ; },
        "to": n => { bucketAggregationRange.to = n.getStringValue() as any ; },
    }
}
