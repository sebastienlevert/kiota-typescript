import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {TeamsAppInstalledEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppInstalledEventMessageDetail(teamsAppInstalledEventMessageDetail: TeamsAppInstalledEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamsAppInstalledEventMessageDetail),
        "initiator": n => { teamsAppInstalledEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "teamsAppDisplayName": n => { teamsAppInstalledEventMessageDetail.teamsAppDisplayName = n.getStringValue() as any ; },
        "teamsAppId": n => { teamsAppInstalledEventMessageDetail.teamsAppId = n.getStringValue() as any ; },
    }
}
