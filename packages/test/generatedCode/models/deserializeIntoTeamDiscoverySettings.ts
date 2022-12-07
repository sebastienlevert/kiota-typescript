import {TeamDiscoverySettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamDiscoverySettings(teamDiscoverySettings: TeamDiscoverySettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "showInTeamsSearchAndSuggestions": n => { teamDiscoverySettings.showInTeamsSearchAndSuggestions = n.getBooleanValue() as any ; },
    }
}
