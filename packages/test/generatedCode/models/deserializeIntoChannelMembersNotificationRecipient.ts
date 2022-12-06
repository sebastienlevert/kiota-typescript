import {deserializeIntoTeamworkNotificationRecipient} from './deserializeIntoTeamworkNotificationRecipient';
import {ChannelMembersNotificationRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelMembersNotificationRecipient(channelMembersNotificationRecipient: ChannelMembersNotificationRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkNotificationRecipient(channelMembersNotificationRecipient),
        "channelId": n => { channelMembersNotificationRecipient.channelId = n.getStringValue() as any ; },
        "teamId": n => { channelMembersNotificationRecipient.teamId = n.getStringValue() as any ; },
    }
}
