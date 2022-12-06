import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingQuestionAssignment} from './deserializeIntoBookingQuestionAssignment';
import {BookingQuestionAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingQuestionAssignmentCollectionResponse(bookingQuestionAssignmentCollectionResponse: BookingQuestionAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingQuestionAssignmentCollectionResponse),
        "value": n => { bookingQuestionAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingQuestionAssignment) as any ; },
    }
}
