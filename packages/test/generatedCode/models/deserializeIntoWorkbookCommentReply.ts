import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookCommentReply} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookCommentReply(workbookCommentReply: WorkbookCommentReply | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookCommentReply),
        "content": n => { workbookCommentReply.content = n.getStringValue() as any ; },
        "contentType": n => { workbookCommentReply.contentType = n.getStringValue() as any ; },
    }
}
