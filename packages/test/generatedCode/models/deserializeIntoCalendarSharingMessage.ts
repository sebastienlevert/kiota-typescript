import {deserializeIntoCalendarSharingMessageAction} from './deserializeIntoCalendarSharingMessageAction';
import {deserializeIntoMessage} from './deserializeIntoMessage';
import {CalendarSharingMessage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarSharingMessage(calendarSharingMessage: CalendarSharingMessage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMessage(calendarSharingMessage),
        "canAccept": n => { calendarSharingMessage.canAccept = n.getBooleanValue() as any ; },
        "sharingMessageAction": n => { calendarSharingMessage.sharingMessageAction = n.getObject(deserializeIntoCalendarSharingMessageAction) as any ; },
        "sharingMessageActions": n => { calendarSharingMessage.sharingMessageActions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCalendarSharingMessageAction) as any ; },
        "suggestedCalendarName": n => { calendarSharingMessage.suggestedCalendarName = n.getStringValue() as any ; },
    }
}
