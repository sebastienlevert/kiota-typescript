import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {TeamUnarchivedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamUnarchivedEventMessageDetail(teamUnarchivedEventMessageDetail: TeamUnarchivedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamUnarchivedEventMessageDetail),
        "initiator": n => { teamUnarchivedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "teamId": n => { teamUnarchivedEventMessageDetail.teamId = n.getStringValue() as any ; },
    }
}
