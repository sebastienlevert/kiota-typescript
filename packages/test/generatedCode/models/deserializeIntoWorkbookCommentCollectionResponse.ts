import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookComment} from './deserializeIntoWorkbookComment';
import {WorkbookCommentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookCommentCollectionResponse(workbookCommentCollectionResponse: WorkbookCommentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookCommentCollectionResponse),
        "value": n => { workbookCommentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookComment) as any ; },
    }
}
