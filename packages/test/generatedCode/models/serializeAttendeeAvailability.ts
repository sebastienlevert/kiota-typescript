import {FreeBusyStatus} from './freeBusyStatus';
import {AttendeeAvailability} from './index';
import {serializeAttendeeBase} from './serializeAttendeeBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendeeAvailability(writer: SerializationWriter, attendeeAvailability: AttendeeAvailability | undefined = {}) : void {
            writer.writeObjectValueFromMethod("attendee", attendeeAvailability.attendee as any, serializeAttendeeBase);
            writer.writeEnumValue<FreeBusyStatus>("availability", attendeeAvailability.availability);
            writer.writeStringValue("@odata.type", attendeeAvailability.odataType);
}
