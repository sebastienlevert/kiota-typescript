import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {TeamArchivedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamArchivedEventMessageDetail(teamArchivedEventMessageDetail: TeamArchivedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamArchivedEventMessageDetail),
        "initiator": n => { teamArchivedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "teamId": n => { teamArchivedEventMessageDetail.teamId = n.getStringValue() as any ; },
    }
}
