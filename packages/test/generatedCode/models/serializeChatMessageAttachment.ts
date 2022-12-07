import {ChatMessageAttachment} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageAttachment(writer: SerializationWriter, chatMessageAttachment: ChatMessageAttachment | undefined = {}) : void {
            writer.writeStringValue("content", chatMessageAttachment.content);
            writer.writeStringValue("contentType", chatMessageAttachment.contentType);
            writer.writeStringValue("contentUrl", chatMessageAttachment.contentUrl);
            writer.writeStringValue("id", chatMessageAttachment.id);
            writer.writeStringValue("name", chatMessageAttachment.name);
            writer.writeStringValue("teamsAppId", chatMessageAttachment.teamsAppId);
            writer.writeStringValue("thumbnailUrl", chatMessageAttachment.thumbnailUrl);
}
