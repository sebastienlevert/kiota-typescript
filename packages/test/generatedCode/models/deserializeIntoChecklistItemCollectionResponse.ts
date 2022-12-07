import {deserializeIntoChecklistItem} from './deserializeIntoChecklistItem';
import {ChecklistItemCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChecklistItemCollectionResponse(checklistItemCollectionResponse: ChecklistItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { checklistItemCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { checklistItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChecklistItem) as any ; },
    }
}
