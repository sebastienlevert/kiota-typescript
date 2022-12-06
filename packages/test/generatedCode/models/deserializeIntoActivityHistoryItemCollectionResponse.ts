import {deserializeIntoActivityHistoryItem} from './deserializeIntoActivityHistoryItem';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ActivityHistoryItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoActivityHistoryItemCollectionResponse(activityHistoryItemCollectionResponse: ActivityHistoryItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(activityHistoryItemCollectionResponse),
        "value": n => { activityHistoryItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoActivityHistoryItem) as any ; },
    }
}
