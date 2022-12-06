import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {MessageUnpinnedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageUnpinnedEventMessageDetail(messageUnpinnedEventMessageDetail: MessageUnpinnedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(messageUnpinnedEventMessageDetail),
        "eventDateTime": n => { messageUnpinnedEventMessageDetail.eventDateTime = n.getDateValue() as any ; },
        "initiator": n => { messageUnpinnedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
