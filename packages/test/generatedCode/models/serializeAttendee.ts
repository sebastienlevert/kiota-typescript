import {Attendee} from './index';
import {serializeAttendeeBase} from './serializeAttendeeBase';
import {serializeResponseStatus} from './serializeResponseStatus';
import {serializeTimeSlot} from './serializeTimeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendee(writer: SerializationWriter, attendee: Attendee | undefined = {}) : void {
        serializeAttendeeBase(writer, attendee)
            writer.writeObjectValueFromMethod("proposedNewTime", attendee.proposedNewTime as any, serializeTimeSlot);
            writer.writeObjectValueFromMethod("status", attendee.status as any, serializeResponseStatus);
}
