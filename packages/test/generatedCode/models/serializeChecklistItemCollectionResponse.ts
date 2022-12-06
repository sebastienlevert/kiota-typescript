import {ChecklistItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChecklistItem} from './serializeChecklistItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChecklistItemCollectionResponse(writer: SerializationWriter, checklistItemCollectionResponse: ChecklistItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, checklistItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", checklistItemCollectionResponse.value as any, serializeChecklistItem);
}
