import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ChannelRenamedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelRenamedEventMessageDetail(channelRenamedEventMessageDetail: ChannelRenamedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelRenamedEventMessageDetail),
        "channelDisplayName": n => { channelRenamedEventMessageDetail.channelDisplayName = n.getStringValue() as any ; },
        "channelId": n => { channelRenamedEventMessageDetail.channelId = n.getStringValue() as any ; },
        "initiator": n => { channelRenamedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
