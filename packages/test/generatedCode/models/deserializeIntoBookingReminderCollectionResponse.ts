import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingReminder} from './deserializeIntoBookingReminder';
import {BookingReminderCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingReminderCollectionResponse(bookingReminderCollectionResponse: BookingReminderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingReminderCollectionResponse),
        "value": n => { bookingReminderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingReminder) as any ; },
    }
}
