import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSharedInsight} from './deserializeIntoSharedInsight';
import {SharedInsightCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedInsightCollectionResponse(sharedInsightCollectionResponse: SharedInsightCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharedInsightCollectionResponse),
        "value": n => { sharedInsightCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSharedInsight) as any ; },
    }
}
