import {BookingReminderCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingReminder} from './serializeBookingReminder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingReminderCollectionResponse(writer: SerializationWriter, bookingReminderCollectionResponse: BookingReminderCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingReminderCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingReminderCollectionResponse.value as any, serializeBookingReminder);
}
