import {ChecklistItemCollectionResponse} from './index';
import {serializeChecklistItem} from './serializeChecklistItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChecklistItemCollectionResponse(writer: SerializationWriter, checklistItemCollectionResponse: ChecklistItemCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", checklistItemCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", checklistItemCollectionResponse.value as any, serializeChecklistItem);
}
