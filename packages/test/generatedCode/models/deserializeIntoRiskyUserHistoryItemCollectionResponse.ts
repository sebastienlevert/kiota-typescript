import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRiskyUserHistoryItem} from './deserializeIntoRiskyUserHistoryItem';
import {RiskyUserHistoryItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyUserHistoryItemCollectionResponse(riskyUserHistoryItemCollectionResponse: RiskyUserHistoryItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(riskyUserHistoryItemCollectionResponse),
        "value": n => { riskyUserHistoryItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRiskyUserHistoryItem) as any ; },
    }
}
