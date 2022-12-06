import {ChannelRenamedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelRenamedEventMessageDetail(writer: SerializationWriter, channelRenamedEventMessageDetail: ChannelRenamedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, channelRenamedEventMessageDetail)
            writer.writeStringValue("channelDisplayName", channelRenamedEventMessageDetail.channelDisplayName);
            writer.writeStringValue("channelId", channelRenamedEventMessageDetail.channelId);
            writer.writeObjectValueFromMethod("initiator", channelRenamedEventMessageDetail.initiator as any, serializeIdentitySet);
}
