import {TeamGuestSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamGuestSettings(teamGuestSettings: TeamGuestSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowCreateUpdateChannels": n => { teamGuestSettings.allowCreateUpdateChannels = n.getBooleanValue() as any ; },
        "allowDeleteChannels": n => { teamGuestSettings.allowDeleteChannels = n.getBooleanValue() as any ; },
    }
}
