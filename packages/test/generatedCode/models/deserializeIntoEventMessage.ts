import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {deserializeIntoEvent} from './deserializeIntoEvent';
import {deserializeIntoLocation} from './deserializeIntoLocation';
import {deserializeIntoMessage} from './deserializeIntoMessage';
import {deserializeIntoPatternedRecurrence} from './deserializeIntoPatternedRecurrence';
import {EventType} from './eventType';
import {EventMessage} from './index';
import {MeetingMessageType} from './meetingMessageType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessage(eventMessage: EventMessage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMessage(eventMessage),
        "endDateTime": n => { eventMessage.endDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "event": n => { eventMessage.event = n.getObject(deserializeIntoEvent) as any ; },
        "isAllDay": n => { eventMessage.isAllDay = n.getBooleanValue() as any ; },
        "isDelegated": n => { eventMessage.isDelegated = n.getBooleanValue() as any ; },
        "isOutOfDate": n => { eventMessage.isOutOfDate = n.getBooleanValue() as any ; },
        "location": n => { eventMessage.location = n.getObject(deserializeIntoLocation) as any ; },
        "meetingMessageType": n => { eventMessage.meetingMessageType = n.getEnumValue<MeetingMessageType>(MeetingMessageType) as any ; },
        "recurrence": n => { eventMessage.recurrence = n.getObject(deserializeIntoPatternedRecurrence) as any ; },
        "startDateTime": n => { eventMessage.startDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "type": n => { eventMessage.type = n.getEnumValue<EventType>(EventType) as any ; },
    }
}
