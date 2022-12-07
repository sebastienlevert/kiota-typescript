import {ChatMessageType} from './chatMessageType';
import {deserializeIntoChatMessageFromIdentitySet} from './deserializeIntoChatMessageFromIdentitySet';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {ChatMessageInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageInfo(chatMessageInfo: ChatMessageInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(chatMessageInfo),
        "body": n => { chatMessageInfo.body = n.getObject(deserializeIntoItemBody) as any ; },
        "createdDateTime": n => { chatMessageInfo.createdDateTime = n.getDateValue() as any ; },
        "eventDetail": n => { chatMessageInfo.eventDetail = n.getObject(deserializeIntoEventMessageDetail) as any ; },
        "from": n => { chatMessageInfo.from = n.getObject(deserializeIntoChatMessageFromIdentitySet) as any ; },
        "isDeleted": n => { chatMessageInfo.isDeleted = n.getBooleanValue() as any ; },
        "messageType": n => { chatMessageInfo.messageType = n.getEnumValue<ChatMessageType>(ChatMessageType) as any ; },
    }
}
