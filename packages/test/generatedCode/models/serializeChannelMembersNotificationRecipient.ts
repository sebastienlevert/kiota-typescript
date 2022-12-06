import {ChannelMembersNotificationRecipient} from './index';
import {serializeTeamworkNotificationRecipient} from './serializeTeamworkNotificationRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelMembersNotificationRecipient(writer: SerializationWriter, channelMembersNotificationRecipient: ChannelMembersNotificationRecipient | undefined = {}) : void {
        serializeTeamworkNotificationRecipient(writer, channelMembersNotificationRecipient)
            writer.writeStringValue("channelId", channelMembersNotificationRecipient.channelId);
            writer.writeStringValue("teamId", channelMembersNotificationRecipient.teamId);
}
