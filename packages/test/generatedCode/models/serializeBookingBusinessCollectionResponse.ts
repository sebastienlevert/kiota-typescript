import {BookingBusinessCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingBusiness} from './serializeBookingBusiness';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingBusinessCollectionResponse(writer: SerializationWriter, bookingBusinessCollectionResponse: BookingBusinessCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingBusinessCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingBusinessCollectionResponse.value as any, serializeBookingBusiness);
}
