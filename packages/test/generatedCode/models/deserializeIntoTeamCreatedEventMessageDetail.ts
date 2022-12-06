import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {TeamCreatedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamCreatedEventMessageDetail(teamCreatedEventMessageDetail: TeamCreatedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamCreatedEventMessageDetail),
        "initiator": n => { teamCreatedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "teamDescription": n => { teamCreatedEventMessageDetail.teamDescription = n.getStringValue() as any ; },
        "teamDisplayName": n => { teamCreatedEventMessageDetail.teamDisplayName = n.getStringValue() as any ; },
        "teamId": n => { teamCreatedEventMessageDetail.teamId = n.getStringValue() as any ; },
    }
}
