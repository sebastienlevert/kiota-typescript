import {AnswerInputType} from './answerInputType';
import {BookingQuestionAnswer} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingQuestionAnswer(bookingQuestionAnswer: BookingQuestionAnswer | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "answer": n => { bookingQuestionAnswer.answer = n.getStringValue() as any ; },
        "answerInputType": n => { bookingQuestionAnswer.answerInputType = n.getEnumValue<AnswerInputType>(AnswerInputType) as any ; },
        "answerOptions": n => { bookingQuestionAnswer.answerOptions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "isRequired": n => { bookingQuestionAnswer.isRequired = n.getBooleanValue() as any ; },
        "@odata.type": n => { bookingQuestionAnswer.odataType = n.getStringValue() as any ; },
        "question": n => { bookingQuestionAnswer.question = n.getStringValue() as any ; },
        "questionId": n => { bookingQuestionAnswer.questionId = n.getStringValue() as any ; },
        "selectedOptions": n => { bookingQuestionAnswer.selectedOptions = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
