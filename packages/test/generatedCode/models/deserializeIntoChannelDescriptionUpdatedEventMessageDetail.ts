import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ChannelDescriptionUpdatedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelDescriptionUpdatedEventMessageDetail(channelDescriptionUpdatedEventMessageDetail: ChannelDescriptionUpdatedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelDescriptionUpdatedEventMessageDetail),
        "channelDescription": n => { channelDescriptionUpdatedEventMessageDetail.channelDescription = n.getStringValue() as any ; },
        "channelId": n => { channelDescriptionUpdatedEventMessageDetail.channelId = n.getStringValue() as any ; },
        "initiator": n => { channelDescriptionUpdatedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
