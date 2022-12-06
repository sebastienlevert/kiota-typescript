import {ChannelAddedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelAddedEventMessageDetail(writer: SerializationWriter, channelAddedEventMessageDetail: ChannelAddedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, channelAddedEventMessageDetail)
            writer.writeStringValue("channelDisplayName", channelAddedEventMessageDetail.channelDisplayName);
            writer.writeStringValue("channelId", channelAddedEventMessageDetail.channelId);
            writer.writeObjectValueFromMethod("initiator", channelAddedEventMessageDetail.initiator as any, serializeIdentitySet);
}
