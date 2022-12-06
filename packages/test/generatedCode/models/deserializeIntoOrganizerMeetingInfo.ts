import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoMeetingInfo} from './deserializeIntoMeetingInfo';
import {OrganizerMeetingInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizerMeetingInfo(organizerMeetingInfo: OrganizerMeetingInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMeetingInfo(organizerMeetingInfo),
        "organizer": n => { organizerMeetingInfo.organizer = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
