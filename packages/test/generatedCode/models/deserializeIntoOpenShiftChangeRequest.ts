import {deserializeIntoScheduleChangeRequest} from './deserializeIntoScheduleChangeRequest';
import {OpenShiftChangeRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShiftChangeRequest(openShiftChangeRequest: OpenShiftChangeRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleChangeRequest(openShiftChangeRequest),
        "openShiftId": n => { openShiftChangeRequest.openShiftId = n.getStringValue() as any ; },
    }
}
