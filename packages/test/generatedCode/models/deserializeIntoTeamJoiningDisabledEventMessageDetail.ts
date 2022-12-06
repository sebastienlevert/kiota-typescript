import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {TeamJoiningDisabledEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamJoiningDisabledEventMessageDetail(teamJoiningDisabledEventMessageDetail: TeamJoiningDisabledEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamJoiningDisabledEventMessageDetail),
        "initiator": n => { teamJoiningDisabledEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "teamId": n => { teamJoiningDisabledEventMessageDetail.teamId = n.getStringValue() as any ; },
    }
}
