import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoChatMessageAttachment} from './deserializeIntoChatMessageAttachment';
import {ChatMessageAttachmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageAttachmentCollectionResponse(chatMessageAttachmentCollectionResponse: ChatMessageAttachmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(chatMessageAttachmentCollectionResponse),
        "value": n => { chatMessageAttachmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessageAttachment) as any ; },
    }
}
