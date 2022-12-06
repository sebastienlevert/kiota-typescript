import {AnswerInputType} from './answerInputType';
import {BookingQuestionAnswer} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingQuestionAnswer(writer: SerializationWriter, bookingQuestionAnswer: BookingQuestionAnswer | undefined = {}) : void {
            writer.writeStringValue("answer", bookingQuestionAnswer.answer);
            writer.writeEnumValue<AnswerInputType>("answerInputType", bookingQuestionAnswer.answerInputType);
            writer.writeCollectionOfPrimitiveValues<string>("answerOptions", bookingQuestionAnswer.answerOptions);
            writer.writeBooleanValue("isRequired", bookingQuestionAnswer.isRequired);
            writer.writeStringValue("@odata.type", bookingQuestionAnswer.odataType);
            writer.writeStringValue("question", bookingQuestionAnswer.question);
            writer.writeStringValue("questionId", bookingQuestionAnswer.questionId);
            writer.writeCollectionOfPrimitiveValues<string>("selectedOptions", bookingQuestionAnswer.selectedOptions);
}
