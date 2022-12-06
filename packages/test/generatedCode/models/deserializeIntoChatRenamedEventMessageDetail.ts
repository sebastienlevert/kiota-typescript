import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ChatRenamedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatRenamedEventMessageDetail(chatRenamedEventMessageDetail: ChatRenamedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(chatRenamedEventMessageDetail),
        "chatDisplayName": n => { chatRenamedEventMessageDetail.chatDisplayName = n.getStringValue() as any ; },
        "chatId": n => { chatRenamedEventMessageDetail.chatId = n.getStringValue() as any ; },
        "initiator": n => { chatRenamedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
