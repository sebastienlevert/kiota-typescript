import {MeetingRegistration} from './index';
import {serializeMeetingRegistrationBase} from './serializeMeetingRegistrationBase';
import {serializeMeetingRegistrationQuestion} from './serializeMeetingRegistrationQuestion';
import {serializeMeetingSpeaker} from './serializeMeetingSpeaker';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingRegistration(writer: SerializationWriter, meetingRegistration: MeetingRegistration | undefined = {}) : void {
        serializeMeetingRegistrationBase(writer, meetingRegistration)
            writer.writeCollectionOfObjectValuesFromMethod("customQuestions", meetingRegistration.customQuestions as any, serializeMeetingRegistrationQuestion);
            writer.writeStringValue("description", meetingRegistration.description);
            writer.writeDateValue("endDateTime", meetingRegistration.endDateTime);
            writer.writeNumberValue("registrationPageViewCount", meetingRegistration.registrationPageViewCount);
            writer.writeStringValue("registrationPageWebUrl", meetingRegistration.registrationPageWebUrl);
            writer.writeCollectionOfObjectValuesFromMethod("speakers", meetingRegistration.speakers as any, serializeMeetingSpeaker);
            writer.writeDateValue("startDateTime", meetingRegistration.startDateTime);
            writer.writeStringValue("subject", meetingRegistration.subject);
}
