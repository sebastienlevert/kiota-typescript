import {ChatMessageAttachmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChatMessageAttachment} from './serializeChatMessageAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageAttachmentCollectionResponse(writer: SerializationWriter, chatMessageAttachmentCollectionResponse: ChatMessageAttachmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatMessageAttachmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", chatMessageAttachmentCollectionResponse.value as any, serializeChatMessageAttachment);
}
