import {BookingCustomQuestionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingCustomQuestion} from './serializeBookingCustomQuestion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomQuestionCollectionResponse(writer: SerializationWriter, bookingCustomQuestionCollectionResponse: BookingCustomQuestionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCustomQuestionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingCustomQuestionCollectionResponse.value as any, serializeBookingCustomQuestion);
}
