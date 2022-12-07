import {TeamDiscoverySettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamDiscoverySettings(writer: SerializationWriter, teamDiscoverySettings: TeamDiscoverySettings | undefined = {}) : void {
            writer.writeBooleanValue("showInTeamsSearchAndSuggestions", teamDiscoverySettings.showInTeamsSearchAndSuggestions);
}
