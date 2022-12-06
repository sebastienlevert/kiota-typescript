import {TaskFileAttachmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTaskFileAttachment} from './serializeTaskFileAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskFileAttachmentCollectionResponse(writer: SerializationWriter, taskFileAttachmentCollectionResponse: TaskFileAttachmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, taskFileAttachmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", taskFileAttachmentCollectionResponse.value as any, serializeTaskFileAttachment);
}
