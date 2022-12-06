import {BookingQuestionAssignment} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingQuestionAssignment(bookingQuestionAssignment: BookingQuestionAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isRequired": n => { bookingQuestionAssignment.isRequired = n.getBooleanValue() as any ; },
        "@odata.type": n => { bookingQuestionAssignment.odataType = n.getStringValue() as any ; },
        "questionId": n => { bookingQuestionAssignment.questionId = n.getStringValue() as any ; },
    }
}
