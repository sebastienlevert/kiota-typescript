import {deserializeIntoMeetingParticipantInfo} from './deserializeIntoMeetingParticipantInfo';
import {MeetingParticipants} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingParticipants(meetingParticipants: MeetingParticipants | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attendees": n => { meetingParticipants.attendees = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingParticipantInfo) as any ; },
        "contributors": n => { meetingParticipants.contributors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingParticipantInfo) as any ; },
        "organizer": n => { meetingParticipants.organizer = n.getObject(deserializeIntoMeetingParticipantInfo) as any ; },
        "producers": n => { meetingParticipants.producers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingParticipantInfo) as any ; },
    }
}
