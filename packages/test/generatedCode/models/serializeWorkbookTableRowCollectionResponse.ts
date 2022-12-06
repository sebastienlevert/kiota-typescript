import {WorkbookTableRowCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookTableRow} from './serializeWorkbookTableRow';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableRowCollectionResponse(writer: SerializationWriter, workbookTableRowCollectionResponse: WorkbookTableRowCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookTableRowCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookTableRowCollectionResponse.value as any, serializeWorkbookTableRow);
}
