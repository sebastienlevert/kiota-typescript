import {WorkbookTableCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookTable} from './serializeWorkbookTable';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableCollectionResponse(writer: SerializationWriter, workbookTableCollectionResponse: WorkbookTableCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookTableCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookTableCollectionResponse.value as any, serializeWorkbookTable);
}
