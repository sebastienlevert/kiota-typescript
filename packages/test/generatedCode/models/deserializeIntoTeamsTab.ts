import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoTeamsApp} from './deserializeIntoTeamsApp';
import {deserializeIntoTeamsTabConfiguration} from './deserializeIntoTeamsTabConfiguration';
import {TeamsTab} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsTab(teamsTab: TeamsTab | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsTab),
        "configuration": n => { teamsTab.configuration = n.getObject(deserializeIntoTeamsTabConfiguration) as any ; },
        "displayName": n => { teamsTab.displayName = n.getStringValue() as any ; },
        "messageId": n => { teamsTab.messageId = n.getStringValue() as any ; },
        "sortOrderIndex": n => { teamsTab.sortOrderIndex = n.getStringValue() as any ; },
        "teamsApp": n => { teamsTab.teamsApp = n.getObject(deserializeIntoTeamsApp) as any ; },
        "teamsAppId": n => { teamsTab.teamsAppId = n.getStringValue() as any ; },
        "webUrl": n => { teamsTab.webUrl = n.getStringValue() as any ; },
    }
}
