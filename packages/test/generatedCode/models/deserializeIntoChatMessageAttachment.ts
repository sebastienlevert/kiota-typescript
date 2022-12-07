import {ChatMessageAttachment} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageAttachment(chatMessageAttachment: ChatMessageAttachment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { chatMessageAttachment.content = n.getStringValue() as any ; },
        "contentType": n => { chatMessageAttachment.contentType = n.getStringValue() as any ; },
        "contentUrl": n => { chatMessageAttachment.contentUrl = n.getStringValue() as any ; },
        "id": n => { chatMessageAttachment.id = n.getStringValue() as any ; },
        "name": n => { chatMessageAttachment.name = n.getStringValue() as any ; },
        "teamsAppId": n => { chatMessageAttachment.teamsAppId = n.getStringValue() as any ; },
        "thumbnailUrl": n => { chatMessageAttachment.thumbnailUrl = n.getStringValue() as any ; },
    }
}
