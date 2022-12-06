import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {TeamsAppRemovedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppRemovedEventMessageDetail(teamsAppRemovedEventMessageDetail: TeamsAppRemovedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamsAppRemovedEventMessageDetail),
        "initiator": n => { teamsAppRemovedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "teamsAppDisplayName": n => { teamsAppRemovedEventMessageDetail.teamsAppDisplayName = n.getStringValue() as any ; },
        "teamsAppId": n => { teamsAppRemovedEventMessageDetail.teamsAppId = n.getStringValue() as any ; },
    }
}
