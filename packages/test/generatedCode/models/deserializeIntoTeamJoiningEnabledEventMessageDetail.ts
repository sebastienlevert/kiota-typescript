import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {TeamJoiningEnabledEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamJoiningEnabledEventMessageDetail(teamJoiningEnabledEventMessageDetail: TeamJoiningEnabledEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamJoiningEnabledEventMessageDetail),
        "initiator": n => { teamJoiningEnabledEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "teamId": n => { teamJoiningEnabledEventMessageDetail.teamId = n.getStringValue() as any ; },
    }
}
