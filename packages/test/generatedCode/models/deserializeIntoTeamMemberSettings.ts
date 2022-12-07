import {TeamMemberSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamMemberSettings(teamMemberSettings: TeamMemberSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowAddRemoveApps": n => { teamMemberSettings.allowAddRemoveApps = n.getBooleanValue() as any ; },
        "allowCreatePrivateChannels": n => { teamMemberSettings.allowCreatePrivateChannels = n.getBooleanValue() as any ; },
        "allowCreateUpdateChannels": n => { teamMemberSettings.allowCreateUpdateChannels = n.getBooleanValue() as any ; },
        "allowCreateUpdateRemoveConnectors": n => { teamMemberSettings.allowCreateUpdateRemoveConnectors = n.getBooleanValue() as any ; },
        "allowCreateUpdateRemoveTabs": n => { teamMemberSettings.allowCreateUpdateRemoveTabs = n.getBooleanValue() as any ; },
        "allowDeleteChannels": n => { teamMemberSettings.allowDeleteChannels = n.getBooleanValue() as any ; },
    }
}
