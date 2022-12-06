import {WorkbookRangeBorderCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookRangeBorder} from './serializeWorkbookRangeBorder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeBorderCollectionResponse(writer: SerializationWriter, workbookRangeBorderCollectionResponse: WorkbookRangeBorderCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookRangeBorderCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookRangeBorderCollectionResponse.value as any, serializeWorkbookRangeBorder);
}
