import {BookingQuestionAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingQuestionAssignment} from './serializeBookingQuestionAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingQuestionAssignmentCollectionResponse(writer: SerializationWriter, bookingQuestionAssignmentCollectionResponse: BookingQuestionAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingQuestionAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingQuestionAssignmentCollectionResponse.value as any, serializeBookingQuestionAssignment);
}
