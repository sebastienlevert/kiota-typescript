import {ChannelMembershipType} from './channelMembershipType';
import {deserializeIntoChannelModerationSettings} from './deserializeIntoChannelModerationSettings';
import {deserializeIntoChannelSummary} from './deserializeIntoChannelSummary';
import {deserializeIntoChatMessage} from './deserializeIntoChatMessage';
import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {deserializeIntoDriveItem} from './deserializeIntoDriveItem';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSharedWithChannelTeamInfo} from './deserializeIntoSharedWithChannelTeamInfo';
import {deserializeIntoTeamsTab} from './deserializeIntoTeamsTab';
import {Channel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannel(channel: Channel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(channel),
        "createdDateTime": n => { channel.createdDateTime = n.getDateValue() as any ; },
        "description": n => { channel.description = n.getStringValue() as any ; },
        "displayName": n => { channel.displayName = n.getStringValue() as any ; },
        "email": n => { channel.email = n.getStringValue() as any ; },
        "filesFolder": n => { channel.filesFolder = n.getObject(deserializeIntoDriveItem) as any ; },
        "isFavoriteByDefault": n => { channel.isFavoriteByDefault = n.getBooleanValue() as any ; },
        "members": n => { channel.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConversationMember) as any ; },
        "membershipType": n => { channel.membershipType = n.getEnumValue<ChannelMembershipType>(ChannelMembershipType) as any ; },
        "messages": n => { channel.messages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessage) as any ; },
        "moderationSettings": n => { channel.moderationSettings = n.getObject(deserializeIntoChannelModerationSettings) as any ; },
        "sharedWithTeams": n => { channel.sharedWithTeams = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSharedWithChannelTeamInfo) as any ; },
        "summary": n => { channel.summary = n.getObject(deserializeIntoChannelSummary) as any ; },
        "tabs": n => { channel.tabs = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsTab) as any ; },
        "tenantId": n => { channel.tenantId = n.getStringValue() as any ; },
        "webUrl": n => { channel.webUrl = n.getStringValue() as any ; },
    }
}
