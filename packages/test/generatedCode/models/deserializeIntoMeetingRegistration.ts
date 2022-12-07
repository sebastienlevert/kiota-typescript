import {deserializeIntoMeetingRegistrationBase} from './deserializeIntoMeetingRegistrationBase';
import {deserializeIntoMeetingRegistrationQuestion} from './deserializeIntoMeetingRegistrationQuestion';
import {deserializeIntoMeetingSpeaker} from './deserializeIntoMeetingSpeaker';
import {MeetingRegistration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingRegistration(meetingRegistration: MeetingRegistration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMeetingRegistrationBase(meetingRegistration),
        "customQuestions": n => { meetingRegistration.customQuestions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingRegistrationQuestion) as any ; },
        "description": n => { meetingRegistration.description = n.getStringValue() as any ; },
        "endDateTime": n => { meetingRegistration.endDateTime = n.getDateValue() as any ; },
        "registrationPageViewCount": n => { meetingRegistration.registrationPageViewCount = n.getNumberValue() as any ; },
        "registrationPageWebUrl": n => { meetingRegistration.registrationPageWebUrl = n.getStringValue() as any ; },
        "speakers": n => { meetingRegistration.speakers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingSpeaker) as any ; },
        "startDateTime": n => { meetingRegistration.startDateTime = n.getDateValue() as any ; },
        "subject": n => { meetingRegistration.subject = n.getStringValue() as any ; },
    }
}
