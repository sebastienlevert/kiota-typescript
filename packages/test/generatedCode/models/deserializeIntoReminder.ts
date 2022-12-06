import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {deserializeIntoLocation} from './deserializeIntoLocation';
import {Reminder} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReminder(reminder: Reminder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "changeKey": n => { reminder.changeKey = n.getStringValue() as any ; },
        "eventEndTime": n => { reminder.eventEndTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "eventId": n => { reminder.eventId = n.getStringValue() as any ; },
        "eventLocation": n => { reminder.eventLocation = n.getObject(deserializeIntoLocation) as any ; },
        "eventStartTime": n => { reminder.eventStartTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "eventSubject": n => { reminder.eventSubject = n.getStringValue() as any ; },
        "eventWebLink": n => { reminder.eventWebLink = n.getStringValue() as any ; },
        "@odata.type": n => { reminder.odataType = n.getStringValue() as any ; },
        "reminderFireTime": n => { reminder.reminderFireTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
    }
}
