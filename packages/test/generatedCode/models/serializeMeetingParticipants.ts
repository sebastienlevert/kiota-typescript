import {MeetingParticipants} from './index';
import {serializeMeetingParticipantInfo} from './serializeMeetingParticipantInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingParticipants(writer: SerializationWriter, meetingParticipants: MeetingParticipants | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("attendees", meetingParticipants.attendees as any, serializeMeetingParticipantInfo);
            writer.writeCollectionOfObjectValuesFromMethod("contributors", meetingParticipants.contributors as any, serializeMeetingParticipantInfo);
            writer.writeObjectValueFromMethod("organizer", meetingParticipants.organizer as any, serializeMeetingParticipantInfo);
            writer.writeCollectionOfObjectValuesFromMethod("producers", meetingParticipants.producers as any, serializeMeetingParticipantInfo);
}
