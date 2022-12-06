import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMeetingParticipantInfo} from './deserializeIntoMeetingParticipantInfo';
import {MeetingParticipantInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingParticipantInfoCollectionResponse(meetingParticipantInfoCollectionResponse: MeetingParticipantInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(meetingParticipantInfoCollectionResponse),
        "value": n => { meetingParticipantInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingParticipantInfo) as any ; },
    }
}
