import {CheckinPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckinPostRequestBody(checkinPostRequestBody: CheckinPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "checkInAs": n => { checkinPostRequestBody.checkInAs = n.getStringValue() as any ; },
        "comment": n => { checkinPostRequestBody.comment = n.getStringValue() as any ; },
    }
}
