import {ChatViewpoint} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatViewpoint(writer: SerializationWriter, chatViewpoint: ChatViewpoint | undefined = {}) : void {
            writer.writeBooleanValue("isHidden", chatViewpoint.isHidden);
            writer.writeDateValue("lastMessageReadDateTime", chatViewpoint.lastMessageReadDateTime);
}
