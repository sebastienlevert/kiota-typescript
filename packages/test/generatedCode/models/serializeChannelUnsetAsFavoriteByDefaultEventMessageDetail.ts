import {ChannelUnsetAsFavoriteByDefaultEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelUnsetAsFavoriteByDefaultEventMessageDetail(writer: SerializationWriter, channelUnsetAsFavoriteByDefaultEventMessageDetail: ChannelUnsetAsFavoriteByDefaultEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, channelUnsetAsFavoriteByDefaultEventMessageDetail)
            writer.writeStringValue("channelId", channelUnsetAsFavoriteByDefaultEventMessageDetail.channelId);
            writer.writeObjectValueFromMethod("initiator", channelUnsetAsFavoriteByDefaultEventMessageDetail.initiator as any, serializeIdentitySet);
}
