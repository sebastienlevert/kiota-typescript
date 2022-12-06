import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ChannelAddedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelAddedEventMessageDetail(channelAddedEventMessageDetail: ChannelAddedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelAddedEventMessageDetail),
        "channelDisplayName": n => { channelAddedEventMessageDetail.channelDisplayName = n.getStringValue() as any ; },
        "channelId": n => { channelAddedEventMessageDetail.channelId = n.getStringValue() as any ; },
        "initiator": n => { channelAddedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
