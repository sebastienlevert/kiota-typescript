import {WorkbookTableColumnCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookTableColumn} from './serializeWorkbookTableColumn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableColumnCollectionResponse(writer: SerializationWriter, workbookTableColumnCollectionResponse: WorkbookTableColumnCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookTableColumnCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookTableColumnCollectionResponse.value as any, serializeWorkbookTableColumn);
}
