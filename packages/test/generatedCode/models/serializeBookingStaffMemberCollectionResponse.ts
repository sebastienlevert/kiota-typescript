import {BookingStaffMemberCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingStaffMember} from './serializeBookingStaffMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingStaffMemberCollectionResponse(writer: SerializationWriter, bookingStaffMemberCollectionResponse: BookingStaffMemberCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingStaffMemberCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingStaffMemberCollectionResponse.value as any, serializeBookingStaffMember);
}
