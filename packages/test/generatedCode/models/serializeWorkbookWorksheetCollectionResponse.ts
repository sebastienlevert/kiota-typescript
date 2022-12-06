import {WorkbookWorksheetCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookWorksheetCollectionResponse(writer: SerializationWriter, workbookWorksheetCollectionResponse: WorkbookWorksheetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookWorksheetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookWorksheetCollectionResponse.value as any, serializeWorkbookWorksheet);
}
