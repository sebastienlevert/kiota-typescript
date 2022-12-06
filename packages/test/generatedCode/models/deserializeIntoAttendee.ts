import {deserializeIntoAttendeeBase} from './deserializeIntoAttendeeBase';
import {deserializeIntoResponseStatus} from './deserializeIntoResponseStatus';
import {deserializeIntoTimeSlot} from './deserializeIntoTimeSlot';
import {Attendee} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendee(attendee: Attendee | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttendeeBase(attendee),
        "proposedNewTime": n => { attendee.proposedNewTime = n.getObject(deserializeIntoTimeSlot) as any ; },
        "status": n => { attendee.status = n.getObject(deserializeIntoResponseStatus) as any ; },
    }
}
