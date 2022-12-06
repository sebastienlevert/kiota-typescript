import {WorkbookNamedItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookNamedItem} from './serializeWorkbookNamedItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookNamedItemCollectionResponse(writer: SerializationWriter, workbookNamedItemCollectionResponse: WorkbookNamedItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookNamedItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookNamedItemCollectionResponse.value as any, serializeWorkbookNamedItem);
}
