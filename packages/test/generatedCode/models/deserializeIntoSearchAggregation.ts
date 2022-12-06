import {deserializeIntoSearchBucket} from './deserializeIntoSearchBucket';
import {SearchAggregation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchAggregation(searchAggregation: SearchAggregation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "buckets": n => { searchAggregation.buckets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSearchBucket) as any ; },
        "field": n => { searchAggregation.field = n.getStringValue() as any ; },
        "@odata.type": n => { searchAggregation.odataType = n.getStringValue() as any ; },
    }
}
