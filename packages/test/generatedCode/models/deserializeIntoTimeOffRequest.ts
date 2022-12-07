import {deserializeIntoScheduleChangeRequest} from './deserializeIntoScheduleChangeRequest';
import {TimeOffRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffRequest(timeOffRequest: TimeOffRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleChangeRequest(timeOffRequest),
        "endDateTime": n => { timeOffRequest.endDateTime = n.getDateValue() as any ; },
        "startDateTime": n => { timeOffRequest.startDateTime = n.getDateValue() as any ; },
        "timeOffReasonId": n => { timeOffRequest.timeOffReasonId = n.getStringValue() as any ; },
    }
}
