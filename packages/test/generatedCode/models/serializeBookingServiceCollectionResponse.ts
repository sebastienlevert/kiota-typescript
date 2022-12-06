import {BookingServiceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingService} from './serializeBookingService';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingServiceCollectionResponse(writer: SerializationWriter, bookingServiceCollectionResponse: BookingServiceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingServiceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingServiceCollectionResponse.value as any, serializeBookingService);
}
