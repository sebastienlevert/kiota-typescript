import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {MessagePinnedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessagePinnedEventMessageDetail(messagePinnedEventMessageDetail: MessagePinnedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(messagePinnedEventMessageDetail),
        "eventDateTime": n => { messagePinnedEventMessageDetail.eventDateTime = n.getDateValue() as any ; },
        "initiator": n => { messagePinnedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
