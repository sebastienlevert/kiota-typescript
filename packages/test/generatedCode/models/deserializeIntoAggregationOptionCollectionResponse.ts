import {deserializeIntoAggregationOption} from './deserializeIntoAggregationOption';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AggregationOptionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAggregationOptionCollectionResponse(aggregationOptionCollectionResponse: AggregationOptionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(aggregationOptionCollectionResponse),
        "value": n => { aggregationOptionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAggregationOption) as any ; },
    }
}
