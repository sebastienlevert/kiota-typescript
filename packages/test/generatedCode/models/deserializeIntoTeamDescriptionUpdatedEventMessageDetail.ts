import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {TeamDescriptionUpdatedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamDescriptionUpdatedEventMessageDetail(teamDescriptionUpdatedEventMessageDetail: TeamDescriptionUpdatedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamDescriptionUpdatedEventMessageDetail),
        "initiator": n => { teamDescriptionUpdatedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "teamDescription": n => { teamDescriptionUpdatedEventMessageDetail.teamDescription = n.getStringValue() as any ; },
        "teamId": n => { teamDescriptionUpdatedEventMessageDetail.teamId = n.getStringValue() as any ; },
    }
}
