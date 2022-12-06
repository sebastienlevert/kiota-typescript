import {AttachmentBaseCollectionResponse} from './index';
import {serializeAttachmentBase} from './serializeAttachmentBase';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentBaseCollectionResponse(writer: SerializationWriter, attachmentBaseCollectionResponse: AttachmentBaseCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attachmentBaseCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", attachmentBaseCollectionResponse.value as any, serializeAttachmentBase);
}
