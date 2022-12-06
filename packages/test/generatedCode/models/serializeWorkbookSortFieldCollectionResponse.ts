import {WorkbookSortFieldCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookSortField} from './serializeWorkbookSortField';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookSortFieldCollectionResponse(writer: SerializationWriter, workbookSortFieldCollectionResponse: WorkbookSortFieldCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookSortFieldCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookSortFieldCollectionResponse.value as any, serializeWorkbookSortField);
}
