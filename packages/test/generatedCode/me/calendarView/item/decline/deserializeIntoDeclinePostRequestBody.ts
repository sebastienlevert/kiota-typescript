import {deserializeIntoTimeSlot} from '../../../../models/deserializeIntoTimeSlot';
import {DeclinePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeclinePostRequestBody(declinePostRequestBody: DeclinePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { declinePostRequestBody.comment = n.getStringValue() as any ; },
        "proposedNewTime": n => { declinePostRequestBody.proposedNewTime = n.getObject(deserializeIntoTimeSlot) as any ; },
        "sendResponse": n => { declinePostRequestBody.sendResponse = n.getBooleanValue() as any ; },
    }
}
