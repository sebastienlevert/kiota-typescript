import {deserializeIntoAttendeeAvailability} from './deserializeIntoAttendeeAvailability';
import {deserializeIntoLocation} from './deserializeIntoLocation';
import {deserializeIntoTimeSlot} from './deserializeIntoTimeSlot';
import {FreeBusyStatus} from './freeBusyStatus';
import {MeetingTimeSuggestion} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingTimeSuggestion(meetingTimeSuggestion: MeetingTimeSuggestion | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attendeeAvailability": n => { meetingTimeSuggestion.attendeeAvailability = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttendeeAvailability) as any ; },
        "confidence": n => { meetingTimeSuggestion.confidence = n.getNumberValue() as any ; },
        "locations": n => { meetingTimeSuggestion.locations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocation) as any ; },
        "meetingTimeSlot": n => { meetingTimeSuggestion.meetingTimeSlot = n.getObject(deserializeIntoTimeSlot) as any ; },
        "@odata.type": n => { meetingTimeSuggestion.odataType = n.getStringValue() as any ; },
        "order": n => { meetingTimeSuggestion.order = n.getNumberValue() as any ; },
        "organizerAvailability": n => { meetingTimeSuggestion.organizerAvailability = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus) as any ; },
        "suggestionReason": n => { meetingTimeSuggestion.suggestionReason = n.getStringValue() as any ; },
    }
}
