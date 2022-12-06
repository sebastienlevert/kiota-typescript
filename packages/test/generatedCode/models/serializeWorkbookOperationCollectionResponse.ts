import {WorkbookOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookOperation} from './serializeWorkbookOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookOperationCollectionResponse(writer: SerializationWriter, workbookOperationCollectionResponse: WorkbookOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookOperationCollectionResponse.value as any, serializeWorkbookOperation);
}
