import {AnswerInputType} from './answerInputType';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MeetingRegistrationQuestion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingRegistrationQuestion(meetingRegistrationQuestion: MeetingRegistrationQuestion | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(meetingRegistrationQuestion),
        "answerInputType": n => { meetingRegistrationQuestion.answerInputType = n.getEnumValue<AnswerInputType>(AnswerInputType) as any ; },
        "answerOptions": n => { meetingRegistrationQuestion.answerOptions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "displayName": n => { meetingRegistrationQuestion.displayName = n.getStringValue() as any ; },
        "isRequired": n => { meetingRegistrationQuestion.isRequired = n.getBooleanValue() as any ; },
    }
}
