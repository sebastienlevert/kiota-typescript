import {ChannelDescriptionUpdatedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelDescriptionUpdatedEventMessageDetail(writer: SerializationWriter, channelDescriptionUpdatedEventMessageDetail: ChannelDescriptionUpdatedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, channelDescriptionUpdatedEventMessageDetail)
            writer.writeStringValue("channelDescription", channelDescriptionUpdatedEventMessageDetail.channelDescription);
            writer.writeStringValue("channelId", channelDescriptionUpdatedEventMessageDetail.channelId);
            writer.writeObjectValueFromMethod("initiator", channelDescriptionUpdatedEventMessageDetail.initiator as any, serializeIdentitySet);
}
