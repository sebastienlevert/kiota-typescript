import {AnswerInputType} from './answerInputType';
import {MeetingRegistrationQuestion} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingRegistrationQuestion(writer: SerializationWriter, meetingRegistrationQuestion: MeetingRegistrationQuestion | undefined = {}) : void {
        serializeEntity(writer, meetingRegistrationQuestion)
            writer.writeEnumValue<AnswerInputType>("answerInputType", meetingRegistrationQuestion.answerInputType);
            writer.writeCollectionOfPrimitiveValues<string>("answerOptions", meetingRegistrationQuestion.answerOptions);
            writer.writeStringValue("displayName", meetingRegistrationQuestion.displayName);
            writer.writeBooleanValue("isRequired", meetingRegistrationQuestion.isRequired);
}
