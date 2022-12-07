import {ChannelMembershipType} from './channelMembershipType';
import {Channel} from './index';
import {serializeChannelModerationSettings} from './serializeChannelModerationSettings';
import {serializeChannelSummary} from './serializeChannelSummary';
import {serializeChatMessage} from './serializeChatMessage';
import {serializeConversationMember} from './serializeConversationMember';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeEntity} from './serializeEntity';
import {serializeSharedWithChannelTeamInfo} from './serializeSharedWithChannelTeamInfo';
import {serializeTeamsTab} from './serializeTeamsTab';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannel(writer: SerializationWriter, channel: Channel | undefined = {}) : void {
        serializeEntity(writer, channel)
            writer.writeDateValue("createdDateTime", channel.createdDateTime);
            writer.writeStringValue("description", channel.description);
            writer.writeStringValue("displayName", channel.displayName);
            writer.writeStringValue("email", channel.email);
            writer.writeObjectValueFromMethod("filesFolder", channel.filesFolder as any, serializeDriveItem);
            writer.writeBooleanValue("isFavoriteByDefault", channel.isFavoriteByDefault);
            writer.writeCollectionOfObjectValuesFromMethod("members", channel.members as any, serializeConversationMember);
            writer.writeEnumValue<ChannelMembershipType>("membershipType", channel.membershipType);
            writer.writeCollectionOfObjectValuesFromMethod("messages", channel.messages as any, serializeChatMessage);
            writer.writeObjectValueFromMethod("moderationSettings", channel.moderationSettings as any, serializeChannelModerationSettings);
            writer.writeCollectionOfObjectValuesFromMethod("sharedWithTeams", channel.sharedWithTeams as any, serializeSharedWithChannelTeamInfo);
            writer.writeObjectValueFromMethod("summary", channel.summary as any, serializeChannelSummary);
            writer.writeCollectionOfObjectValuesFromMethod("tabs", channel.tabs as any, serializeTeamsTab);
            writer.writeStringValue("tenantId", channel.tenantId);
            writer.writeStringValue("webUrl", channel.webUrl);
}
