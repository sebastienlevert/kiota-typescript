import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {TeamsAppUpgradedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppUpgradedEventMessageDetail(teamsAppUpgradedEventMessageDetail: TeamsAppUpgradedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamsAppUpgradedEventMessageDetail),
        "initiator": n => { teamsAppUpgradedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "teamsAppDisplayName": n => { teamsAppUpgradedEventMessageDetail.teamsAppDisplayName = n.getStringValue() as any ; },
        "teamsAppId": n => { teamsAppUpgradedEventMessageDetail.teamsAppId = n.getStringValue() as any ; },
    }
}
