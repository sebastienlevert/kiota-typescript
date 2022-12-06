import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {FreeBusyStatus} from './freeBusyStatus';
import {ScheduleItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleItem(scheduleItem: ScheduleItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "end": n => { scheduleItem.end = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "isPrivate": n => { scheduleItem.isPrivate = n.getBooleanValue() as any ; },
        "location": n => { scheduleItem.location = n.getStringValue() as any ; },
        "@odata.type": n => { scheduleItem.odataType = n.getStringValue() as any ; },
        "start": n => { scheduleItem.start = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "status": n => { scheduleItem.status = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus) as any ; },
        "subject": n => { scheduleItem.subject = n.getStringValue() as any ; },
    }
}
