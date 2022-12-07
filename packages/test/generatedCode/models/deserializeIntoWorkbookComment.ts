import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookCommentReply} from './deserializeIntoWorkbookCommentReply';
import {WorkbookComment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookComment(workbookComment: WorkbookComment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookComment),
        "content": n => { workbookComment.content = n.getStringValue() as any ; },
        "contentType": n => { workbookComment.contentType = n.getStringValue() as any ; },
        "replies": n => { workbookComment.replies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookCommentReply) as any ; },
    }
}
