import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {TeamRenamedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamRenamedEventMessageDetail(teamRenamedEventMessageDetail: TeamRenamedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamRenamedEventMessageDetail),
        "initiator": n => { teamRenamedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "teamDisplayName": n => { teamRenamedEventMessageDetail.teamDisplayName = n.getStringValue() as any ; },
        "teamId": n => { teamRenamedEventMessageDetail.teamId = n.getStringValue() as any ; },
    }
}
