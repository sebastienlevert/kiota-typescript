import {BookingReminderRecipients} from './bookingReminderRecipients';
import {BookingReminder} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingReminder(writer: SerializationWriter, bookingReminder: BookingReminder | undefined = {}) : void {
            writer.writeStringValue("message", bookingReminder.message);
            writer.writeStringValue("@odata.type", bookingReminder.odataType);
            writer.writeDurationValue("offset", bookingReminder.offset);
            writer.writeEnumValue<BookingReminderRecipients>("recipients", bookingReminder.recipients);
}
