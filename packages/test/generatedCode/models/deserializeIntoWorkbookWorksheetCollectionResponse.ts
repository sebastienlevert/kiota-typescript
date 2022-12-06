import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookWorksheet} from './deserializeIntoWorkbookWorksheet';
import {WorkbookWorksheetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookWorksheetCollectionResponse(workbookWorksheetCollectionResponse: WorkbookWorksheetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookWorksheetCollectionResponse),
        "value": n => { workbookWorksheetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookWorksheet) as any ; },
    }
}
