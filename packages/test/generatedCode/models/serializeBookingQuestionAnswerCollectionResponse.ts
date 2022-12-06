import {BookingQuestionAnswerCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingQuestionAnswer} from './serializeBookingQuestionAnswer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingQuestionAnswerCollectionResponse(writer: SerializationWriter, bookingQuestionAnswerCollectionResponse: BookingQuestionAnswerCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingQuestionAnswerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingQuestionAnswerCollectionResponse.value as any, serializeBookingQuestionAnswer);
}
