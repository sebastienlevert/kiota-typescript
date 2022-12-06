import {WorkbookPivotTableCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookPivotTable} from './serializeWorkbookPivotTable';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookPivotTableCollectionResponse(writer: SerializationWriter, workbookPivotTableCollectionResponse: WorkbookPivotTableCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookPivotTableCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookPivotTableCollectionResponse.value as any, serializeWorkbookPivotTable);
}
