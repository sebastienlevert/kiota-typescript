import {AnswerInputType} from './answerInputType';
import {BookingCustomQuestion} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomQuestion(writer: SerializationWriter, bookingCustomQuestion: BookingCustomQuestion | undefined = {}) : void {
        serializeEntity(writer, bookingCustomQuestion)
            writer.writeEnumValue<AnswerInputType>("answerInputType", bookingCustomQuestion.answerInputType);
            writer.writeCollectionOfPrimitiveValues<string>("answerOptions", bookingCustomQuestion.answerOptions);
            writer.writeStringValue("displayName", bookingCustomQuestion.displayName);
}
