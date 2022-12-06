import {deserializeIntoBucketAggregationDefinition} from './deserializeIntoBucketAggregationDefinition';
import {AggregationOption} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAggregationOption(aggregationOption: AggregationOption | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "bucketDefinition": n => { aggregationOption.bucketDefinition = n.getObject(deserializeIntoBucketAggregationDefinition) as any ; },
        "field": n => { aggregationOption.field = n.getStringValue() as any ; },
        "@odata.type": n => { aggregationOption.odataType = n.getStringValue() as any ; },
        "size": n => { aggregationOption.size = n.getNumberValue() as any ; },
    }
}
