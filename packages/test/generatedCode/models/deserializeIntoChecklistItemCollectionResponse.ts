import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoChecklistItem} from './deserializeIntoChecklistItem';
import {ChecklistItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChecklistItemCollectionResponse(checklistItemCollectionResponse: ChecklistItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(checklistItemCollectionResponse),
        "value": n => { checklistItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChecklistItem) as any ; },
    }
}
