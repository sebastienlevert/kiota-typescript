import {BookingWorkHoursCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingWorkHours} from './serializeBookingWorkHours';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingWorkHoursCollectionResponse(writer: SerializationWriter, bookingWorkHoursCollectionResponse: BookingWorkHoursCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingWorkHoursCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingWorkHoursCollectionResponse.value as any, serializeBookingWorkHours);
}
