import {WorkbookCommentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookComment} from './serializeWorkbookComment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookCommentCollectionResponse(writer: SerializationWriter, workbookCommentCollectionResponse: WorkbookCommentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookCommentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookCommentCollectionResponse.value as any, serializeWorkbookComment);
}
