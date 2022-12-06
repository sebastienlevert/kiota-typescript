import {ChannelSetAsFavoriteByDefaultEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelSetAsFavoriteByDefaultEventMessageDetail(writer: SerializationWriter, channelSetAsFavoriteByDefaultEventMessageDetail: ChannelSetAsFavoriteByDefaultEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, channelSetAsFavoriteByDefaultEventMessageDetail)
            writer.writeStringValue("channelId", channelSetAsFavoriteByDefaultEventMessageDetail.channelId);
            writer.writeObjectValueFromMethod("initiator", channelSetAsFavoriteByDefaultEventMessageDetail.initiator as any, serializeIdentitySet);
}
