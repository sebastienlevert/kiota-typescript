import {BookingStaffMemberBaseCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingStaffMemberBase} from './serializeBookingStaffMemberBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingStaffMemberBaseCollectionResponse(writer: SerializationWriter, bookingStaffMemberBaseCollectionResponse: BookingStaffMemberBaseCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingStaffMemberBaseCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingStaffMemberBaseCollectionResponse.value as any, serializeBookingStaffMemberBase);
}
