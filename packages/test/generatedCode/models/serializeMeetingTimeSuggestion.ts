import {FreeBusyStatus} from './freeBusyStatus';
import {MeetingTimeSuggestion} from './index';
import {serializeAttendeeAvailability} from './serializeAttendeeAvailability';
import {serializeLocation} from './serializeLocation';
import {serializeTimeSlot} from './serializeTimeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingTimeSuggestion(writer: SerializationWriter, meetingTimeSuggestion: MeetingTimeSuggestion | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("attendeeAvailability", meetingTimeSuggestion.attendeeAvailability as any, serializeAttendeeAvailability);
            writer.writeNumberValue("confidence", meetingTimeSuggestion.confidence);
            writer.writeCollectionOfObjectValuesFromMethod("locations", meetingTimeSuggestion.locations as any, serializeLocation);
            writer.writeObjectValueFromMethod("meetingTimeSlot", meetingTimeSuggestion.meetingTimeSlot as any, serializeTimeSlot);
            writer.writeStringValue("@odata.type", meetingTimeSuggestion.odataType);
            writer.writeNumberValue("order", meetingTimeSuggestion.order);
            writer.writeEnumValue<FreeBusyStatus>("organizerAvailability", meetingTimeSuggestion.organizerAvailability);
            writer.writeStringValue("suggestionReason", meetingTimeSuggestion.suggestionReason);
}
