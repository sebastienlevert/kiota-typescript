import {RejectReason} from '../../../../models/rejectReason';
import {RejectPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRejectPostRequestBody(rejectPostRequestBody: RejectPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "callbackUri": n => { rejectPostRequestBody.callbackUri = n.getStringValue() as any ; },
        "reason": n => { rejectPostRequestBody.reason = n.getEnumValue<RejectReason>(RejectReason) as any ; },
    }
}
