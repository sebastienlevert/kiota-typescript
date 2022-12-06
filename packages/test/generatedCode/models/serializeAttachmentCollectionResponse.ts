import {AttachmentCollectionResponse} from './index';
import {serializeAttachment} from './serializeAttachment';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentCollectionResponse(writer: SerializationWriter, attachmentCollectionResponse: AttachmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attachmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", attachmentCollectionResponse.value as any, serializeAttachment);
}
