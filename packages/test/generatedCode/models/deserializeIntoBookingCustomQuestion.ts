import {AnswerInputType} from './answerInputType';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {BookingCustomQuestion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomQuestion(bookingCustomQuestion: BookingCustomQuestion | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingCustomQuestion),
        "answerInputType": n => { bookingCustomQuestion.answerInputType = n.getEnumValue<AnswerInputType>(AnswerInputType) as any ; },
        "answerOptions": n => { bookingCustomQuestion.answerOptions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "displayName": n => { bookingCustomQuestion.displayName = n.getStringValue() as any ; },
    }
}
