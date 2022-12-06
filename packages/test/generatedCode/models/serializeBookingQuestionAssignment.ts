import {BookingQuestionAssignment} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingQuestionAssignment(writer: SerializationWriter, bookingQuestionAssignment: BookingQuestionAssignment | undefined = {}) : void {
            writer.writeBooleanValue("isRequired", bookingQuestionAssignment.isRequired);
            writer.writeStringValue("@odata.type", bookingQuestionAssignment.odataType);
            writer.writeStringValue("questionId", bookingQuestionAssignment.questionId);
}
