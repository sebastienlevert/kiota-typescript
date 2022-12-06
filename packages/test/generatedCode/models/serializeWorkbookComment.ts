import {WorkbookComment} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookCommentReply} from './serializeWorkbookCommentReply';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookComment(writer: SerializationWriter, workbookComment: WorkbookComment | undefined = {}) : void {
        serializeEntity(writer, workbookComment)
            writer.writeStringValue("content", workbookComment.content);
            writer.writeStringValue("contentType", workbookComment.contentType);
            writer.writeCollectionOfObjectValuesFromMethod("replies", workbookComment.replies as any, serializeWorkbookCommentReply);
}
