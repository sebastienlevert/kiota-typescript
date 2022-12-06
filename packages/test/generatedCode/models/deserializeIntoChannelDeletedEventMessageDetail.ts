import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ChannelDeletedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelDeletedEventMessageDetail(channelDeletedEventMessageDetail: ChannelDeletedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelDeletedEventMessageDetail),
        "channelDisplayName": n => { channelDeletedEventMessageDetail.channelDisplayName = n.getStringValue() as any ; },
        "channelId": n => { channelDeletedEventMessageDetail.channelId = n.getStringValue() as any ; },
        "initiator": n => { channelDeletedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
