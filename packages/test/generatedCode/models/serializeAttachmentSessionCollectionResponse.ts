import {AttachmentSessionCollectionResponse} from './index';
import {serializeAttachmentSession} from './serializeAttachmentSession';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentSessionCollectionResponse(writer: SerializationWriter, attachmentSessionCollectionResponse: AttachmentSessionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attachmentSessionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", attachmentSessionCollectionResponse.value as any, serializeAttachmentSession);
}
