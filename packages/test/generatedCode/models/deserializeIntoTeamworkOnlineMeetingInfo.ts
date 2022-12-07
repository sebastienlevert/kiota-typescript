import {deserializeIntoTeamworkUserIdentity} from './deserializeIntoTeamworkUserIdentity';
import {TeamworkOnlineMeetingInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkOnlineMeetingInfo(teamworkOnlineMeetingInfo: TeamworkOnlineMeetingInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "calendarEventId": n => { teamworkOnlineMeetingInfo.calendarEventId = n.getStringValue() as any ; },
        "joinWebUrl": n => { teamworkOnlineMeetingInfo.joinWebUrl = n.getStringValue() as any ; },
        "organizer": n => { teamworkOnlineMeetingInfo.organizer = n.getObject(deserializeIntoTeamworkUserIdentity) as any ; },
    }
}
