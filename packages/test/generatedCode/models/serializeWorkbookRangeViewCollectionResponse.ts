import {WorkbookRangeViewCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookRangeView} from './serializeWorkbookRangeView';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeViewCollectionResponse(writer: SerializationWriter, workbookRangeViewCollectionResponse: WorkbookRangeViewCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookRangeViewCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookRangeViewCollectionResponse.value as any, serializeWorkbookRangeView);
}
