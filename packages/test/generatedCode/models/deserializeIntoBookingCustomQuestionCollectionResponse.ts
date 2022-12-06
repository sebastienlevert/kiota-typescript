import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingCustomQuestion} from './deserializeIntoBookingCustomQuestion';
import {BookingCustomQuestionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomQuestionCollectionResponse(bookingCustomQuestionCollectionResponse: BookingCustomQuestionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingCustomQuestionCollectionResponse),
        "value": n => { bookingCustomQuestionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingCustomQuestion) as any ; },
    }
}
