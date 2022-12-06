import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingQuestionAnswer} from './deserializeIntoBookingQuestionAnswer';
import {BookingQuestionAnswerCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingQuestionAnswerCollectionResponse(bookingQuestionAnswerCollectionResponse: BookingQuestionAnswerCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingQuestionAnswerCollectionResponse),
        "value": n => { bookingQuestionAnswerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingQuestionAnswer) as any ; },
    }
}
