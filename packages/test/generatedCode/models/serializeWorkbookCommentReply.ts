import {WorkbookCommentReply} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookCommentReply(writer: SerializationWriter, workbookCommentReply: WorkbookCommentReply | undefined = {}) : void {
        serializeEntity(writer, workbookCommentReply)
            writer.writeStringValue("content", workbookCommentReply.content);
            writer.writeStringValue("contentType", workbookCommentReply.contentType);
}
