import {ChannelIdentity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelIdentity(writer: SerializationWriter, channelIdentity: ChannelIdentity | undefined = {}) : void {
            writer.writeStringValue("channelId", channelIdentity.channelId);
            writer.writeStringValue("teamId", channelIdentity.teamId);
}
