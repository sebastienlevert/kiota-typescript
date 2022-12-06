import {WorkbookCommentReplyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookCommentReply} from './serializeWorkbookCommentReply';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookCommentReplyCollectionResponse(writer: SerializationWriter, workbookCommentReplyCollectionResponse: WorkbookCommentReplyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookCommentReplyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookCommentReplyCollectionResponse.value as any, serializeWorkbookCommentReply);
}
