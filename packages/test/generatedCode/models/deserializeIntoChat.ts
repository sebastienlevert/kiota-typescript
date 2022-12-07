import {ChatType} from './chatType';
import {deserializeIntoChatMessage} from './deserializeIntoChatMessage';
import {deserializeIntoChatMessageInfo} from './deserializeIntoChatMessageInfo';
import {deserializeIntoChatViewpoint} from './deserializeIntoChatViewpoint';
import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPinnedChatMessageInfo} from './deserializeIntoPinnedChatMessageInfo';
import {deserializeIntoResourceSpecificPermissionGrant} from './deserializeIntoResourceSpecificPermissionGrant';
import {deserializeIntoTeamsAppInstallation} from './deserializeIntoTeamsAppInstallation';
import {deserializeIntoTeamsAsyncOperation} from './deserializeIntoTeamsAsyncOperation';
import {deserializeIntoTeamsTab} from './deserializeIntoTeamsTab';
import {deserializeIntoTeamworkOnlineMeetingInfo} from './deserializeIntoTeamworkOnlineMeetingInfo';
import {Chat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChat(chat: Chat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(chat),
        "chatType": n => { chat.chatType = n.getEnumValue<ChatType>(ChatType) as any ; },
        "createdDateTime": n => { chat.createdDateTime = n.getDateValue() as any ; },
        "installedApps": n => { chat.installedApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsAppInstallation) as any ; },
        "lastMessagePreview": n => { chat.lastMessagePreview = n.getObject(deserializeIntoChatMessageInfo) as any ; },
        "lastUpdatedDateTime": n => { chat.lastUpdatedDateTime = n.getDateValue() as any ; },
        "members": n => { chat.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConversationMember) as any ; },
        "messages": n => { chat.messages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessage) as any ; },
        "onlineMeetingInfo": n => { chat.onlineMeetingInfo = n.getObject(deserializeIntoTeamworkOnlineMeetingInfo) as any ; },
        "operations": n => { chat.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsAsyncOperation) as any ; },
        "permissionGrants": n => { chat.permissionGrants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceSpecificPermissionGrant) as any ; },
        "pinnedMessages": n => { chat.pinnedMessages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPinnedChatMessageInfo) as any ; },
        "tabs": n => { chat.tabs = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsTab) as any ; },
        "tenantId": n => { chat.tenantId = n.getStringValue() as any ; },
        "topic": n => { chat.topic = n.getStringValue() as any ; },
        "viewpoint": n => { chat.viewpoint = n.getObject(deserializeIntoChatViewpoint) as any ; },
        "webUrl": n => { chat.webUrl = n.getStringValue() as any ; },
    }
}
