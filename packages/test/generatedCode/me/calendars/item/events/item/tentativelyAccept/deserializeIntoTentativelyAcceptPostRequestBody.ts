import {deserializeIntoTimeSlot} from '../../../../../../models/deserializeIntoTimeSlot';
import {TentativelyAcceptPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTentativelyAcceptPostRequestBody(tentativelyAcceptPostRequestBody: TentativelyAcceptPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { tentativelyAcceptPostRequestBody.comment = n.getStringValue() as any ; },
        "proposedNewTime": n => { tentativelyAcceptPostRequestBody.proposedNewTime = n.getObject(deserializeIntoTimeSlot) as any ; },
        "sendResponse": n => { tentativelyAcceptPostRequestBody.sendResponse = n.getBooleanValue() as any ; },
    }
}
