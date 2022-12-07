import {ChatMessageType} from './chatMessageType';
import {ChatMessageInfo} from './index';
import {serializeChatMessageFromIdentitySet} from './serializeChatMessageFromIdentitySet';
import {serializeEntity} from './serializeEntity';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeItemBody} from './serializeItemBody';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageInfo(writer: SerializationWriter, chatMessageInfo: ChatMessageInfo | undefined = {}) : void {
        serializeEntity(writer, chatMessageInfo)
            writer.writeObjectValueFromMethod("body", chatMessageInfo.body as any, serializeItemBody);
            writer.writeDateValue("createdDateTime", chatMessageInfo.createdDateTime);
            writer.writeObjectValueFromMethod("eventDetail", chatMessageInfo.eventDetail as any, serializeEventMessageDetail);
            writer.writeObjectValueFromMethod("from", chatMessageInfo.from as any, serializeChatMessageFromIdentitySet);
            writer.writeBooleanValue("isDeleted", chatMessageInfo.isDeleted);
            writer.writeEnumValue<ChatMessageType>("messageType", chatMessageInfo.messageType);
}
