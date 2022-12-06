import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingStaffMemberBase} from './deserializeIntoBookingStaffMemberBase';
import {BookingStaffMemberBaseCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingStaffMemberBaseCollectionResponse(bookingStaffMemberBaseCollectionResponse: BookingStaffMemberBaseCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingStaffMemberBaseCollectionResponse),
        "value": n => { bookingStaffMemberBaseCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingStaffMemberBase) as any ; },
    }
}
