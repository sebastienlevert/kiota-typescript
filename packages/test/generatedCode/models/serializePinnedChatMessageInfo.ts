import {PinnedChatMessageInfo} from './index';
import {serializeChatMessage} from './serializeChatMessage';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePinnedChatMessageInfo(writer: SerializationWriter, pinnedChatMessageInfo: PinnedChatMessageInfo | undefined = {}) : void {
        serializeEntity(writer, pinnedChatMessageInfo)
            writer.writeObjectValueFromMethod("message", pinnedChatMessageInfo.message as any, serializeChatMessage);
}
