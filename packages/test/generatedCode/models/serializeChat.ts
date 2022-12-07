import {ChatType} from './chatType';
import {Chat} from './index';
import {serializeChatMessage} from './serializeChatMessage';
import {serializeChatMessageInfo} from './serializeChatMessageInfo';
import {serializeChatViewpoint} from './serializeChatViewpoint';
import {serializeConversationMember} from './serializeConversationMember';
import {serializeEntity} from './serializeEntity';
import {serializePinnedChatMessageInfo} from './serializePinnedChatMessageInfo';
import {serializeResourceSpecificPermissionGrant} from './serializeResourceSpecificPermissionGrant';
import {serializeTeamsAppInstallation} from './serializeTeamsAppInstallation';
import {serializeTeamsAsyncOperation} from './serializeTeamsAsyncOperation';
import {serializeTeamsTab} from './serializeTeamsTab';
import {serializeTeamworkOnlineMeetingInfo} from './serializeTeamworkOnlineMeetingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChat(writer: SerializationWriter, chat: Chat | undefined = {}) : void {
        serializeEntity(writer, chat)
            writer.writeEnumValue<ChatType>("chatType", chat.chatType);
            writer.writeDateValue("createdDateTime", chat.createdDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("installedApps", chat.installedApps as any, serializeTeamsAppInstallation);
            writer.writeObjectValueFromMethod("lastMessagePreview", chat.lastMessagePreview as any, serializeChatMessageInfo);
            writer.writeDateValue("lastUpdatedDateTime", chat.lastUpdatedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("members", chat.members as any, serializeConversationMember);
            writer.writeCollectionOfObjectValuesFromMethod("messages", chat.messages as any, serializeChatMessage);
            writer.writeObjectValueFromMethod("onlineMeetingInfo", chat.onlineMeetingInfo as any, serializeTeamworkOnlineMeetingInfo);
            writer.writeCollectionOfObjectValuesFromMethod("operations", chat.operations as any, serializeTeamsAsyncOperation);
            writer.writeCollectionOfObjectValuesFromMethod("permissionGrants", chat.permissionGrants as any, serializeResourceSpecificPermissionGrant);
            writer.writeCollectionOfObjectValuesFromMethod("pinnedMessages", chat.pinnedMessages as any, serializePinnedChatMessageInfo);
            writer.writeCollectionOfObjectValuesFromMethod("tabs", chat.tabs as any, serializeTeamsTab);
            writer.writeStringValue("tenantId", chat.tenantId);
            writer.writeStringValue("topic", chat.topic);
            writer.writeObjectValueFromMethod("viewpoint", chat.viewpoint as any, serializeChatViewpoint);
            writer.writeStringValue("webUrl", chat.webUrl);
}
