import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingStaffMember} from './deserializeIntoBookingStaffMember';
import {BookingStaffMemberCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingStaffMemberCollectionResponse(bookingStaffMemberCollectionResponse: BookingStaffMemberCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingStaffMemberCollectionResponse),
        "value": n => { bookingStaffMemberCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingStaffMember) as any ; },
    }
}
