import {BookingReminderRecipients} from './bookingReminderRecipients';
import {BookingReminder} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingReminder(bookingReminder: BookingReminder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "message": n => { bookingReminder.message = n.getStringValue() as any ; },
        "@odata.type": n => { bookingReminder.odataType = n.getStringValue() as any ; },
        "offset": n => { bookingReminder.offset = n.getDurationValue() as any ; },
        "recipients": n => { bookingReminder.recipients = n.getEnumValue<BookingReminderRecipients>(BookingReminderRecipients) as any ; },
    }
}
