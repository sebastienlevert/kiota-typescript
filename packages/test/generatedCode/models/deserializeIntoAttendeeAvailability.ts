import {deserializeIntoAttendeeBase} from './deserializeIntoAttendeeBase';
import {FreeBusyStatus} from './freeBusyStatus';
import {AttendeeAvailability} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendeeAvailability(attendeeAvailability: AttendeeAvailability | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attendee": n => { attendeeAvailability.attendee = n.getObject(deserializeIntoAttendeeBase) as any ; },
        "availability": n => { attendeeAvailability.availability = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus) as any ; },
        "@odata.type": n => { attendeeAvailability.odataType = n.getStringValue() as any ; },
    }
}
