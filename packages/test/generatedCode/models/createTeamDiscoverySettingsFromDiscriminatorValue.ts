import {TeamDiscoverySettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamDiscoverySettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamDiscoverySettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamDiscoverySettings();
}
