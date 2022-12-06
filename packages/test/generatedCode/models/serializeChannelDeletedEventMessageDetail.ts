import {ChannelDeletedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelDeletedEventMessageDetail(writer: SerializationWriter, channelDeletedEventMessageDetail: ChannelDeletedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, channelDeletedEventMessageDetail)
            writer.writeStringValue("channelDisplayName", channelDeletedEventMessageDetail.channelDisplayName);
            writer.writeStringValue("channelId", channelDeletedEventMessageDetail.channelId);
            writer.writeObjectValueFromMethod("initiator", channelDeletedEventMessageDetail.initiator as any, serializeIdentitySet);
}
