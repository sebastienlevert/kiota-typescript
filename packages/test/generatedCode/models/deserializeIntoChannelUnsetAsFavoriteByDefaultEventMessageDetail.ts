import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ChannelUnsetAsFavoriteByDefaultEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelUnsetAsFavoriteByDefaultEventMessageDetail(channelUnsetAsFavoriteByDefaultEventMessageDetail: ChannelUnsetAsFavoriteByDefaultEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelUnsetAsFavoriteByDefaultEventMessageDetail),
        "channelId": n => { channelUnsetAsFavoriteByDefaultEventMessageDetail.channelId = n.getStringValue() as any ; },
        "initiator": n => { channelUnsetAsFavoriteByDefaultEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
