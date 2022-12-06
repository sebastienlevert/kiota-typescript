import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookCommentReply} from './deserializeIntoWorkbookCommentReply';
import {WorkbookCommentReplyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookCommentReplyCollectionResponse(workbookCommentReplyCollectionResponse: WorkbookCommentReplyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookCommentReplyCollectionResponse),
        "value": n => { workbookCommentReplyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookCommentReply) as any ; },
    }
}
