import {ChatMessageActions} from './chatMessageActions';
import {ChatMessageHistoryItem} from './index';
import {serializeChatMessageReaction} from './serializeChatMessageReaction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageHistoryItem(writer: SerializationWriter, chatMessageHistoryItem: ChatMessageHistoryItem | undefined = {}) : void {
            writer.writeEnumValue<ChatMessageActions>("actions", chatMessageHistoryItem.actions);
            writer.writeDateValue("modifiedDateTime", chatMessageHistoryItem.modifiedDateTime);
            writer.writeObjectValueFromMethod("reaction", chatMessageHistoryItem.reaction as any, serializeChatMessageReaction);
}
