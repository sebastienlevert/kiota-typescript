import {ChannelSummary} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelSummary(writer: SerializationWriter, channelSummary: ChannelSummary | undefined = {}) : void {
            writer.writeNumberValue("guestsCount", channelSummary.guestsCount);
            writer.writeBooleanValue("hasMembersFromOtherTenants", channelSummary.hasMembersFromOtherTenants);
            writer.writeNumberValue("membersCount", channelSummary.membersCount);
            writer.writeNumberValue("ownersCount", channelSummary.ownersCount);
}
