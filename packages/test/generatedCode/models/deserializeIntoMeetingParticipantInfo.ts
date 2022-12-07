import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {MeetingParticipantInfo} from './index';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingParticipantInfo(meetingParticipantInfo: MeetingParticipantInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "identity": n => { meetingParticipantInfo.identity = n.getObject(deserializeIntoIdentitySet) as any ; },
        "role": n => { meetingParticipantInfo.role = n.getEnumValue<OnlineMeetingRole>(OnlineMeetingRole) as any ; },
        "upn": n => { meetingParticipantInfo.upn = n.getStringValue() as any ; },
    }
}
