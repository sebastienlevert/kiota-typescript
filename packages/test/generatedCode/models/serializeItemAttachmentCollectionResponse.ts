import {ItemAttachmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeItemAttachment} from './serializeItemAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemAttachmentCollectionResponse(writer: SerializationWriter, itemAttachmentCollectionResponse: ItemAttachmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, itemAttachmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", itemAttachmentCollectionResponse.value as any, serializeItemAttachment);
}
