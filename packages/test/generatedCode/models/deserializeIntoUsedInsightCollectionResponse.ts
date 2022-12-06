import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUsedInsight} from './deserializeIntoUsedInsight';
import {UsedInsightCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUsedInsightCollectionResponse(usedInsightCollectionResponse: UsedInsightCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(usedInsightCollectionResponse),
        "value": n => { usedInsightCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUsedInsight) as any ; },
    }
}
