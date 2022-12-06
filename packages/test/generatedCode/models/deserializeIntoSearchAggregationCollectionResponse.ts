import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSearchAggregation} from './deserializeIntoSearchAggregation';
import {SearchAggregationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchAggregationCollectionResponse(searchAggregationCollectionResponse: SearchAggregationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(searchAggregationCollectionResponse),
        "value": n => { searchAggregationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSearchAggregation) as any ; },
    }
}
