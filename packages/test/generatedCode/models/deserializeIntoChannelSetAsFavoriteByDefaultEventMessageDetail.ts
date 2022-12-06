import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ChannelSetAsFavoriteByDefaultEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelSetAsFavoriteByDefaultEventMessageDetail(channelSetAsFavoriteByDefaultEventMessageDetail: ChannelSetAsFavoriteByDefaultEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelSetAsFavoriteByDefaultEventMessageDetail),
        "channelId": n => { channelSetAsFavoriteByDefaultEventMessageDetail.channelId = n.getStringValue() as any ; },
        "initiator": n => { channelSetAsFavoriteByDefaultEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
