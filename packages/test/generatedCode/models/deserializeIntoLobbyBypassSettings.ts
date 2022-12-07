import {LobbyBypassSettings} from './index';
import {LobbyBypassScope} from './lobbyBypassScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLobbyBypassSettings(lobbyBypassSettings: LobbyBypassSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isDialInBypassEnabled": n => { lobbyBypassSettings.isDialInBypassEnabled = n.getBooleanValue() as any ; },
        "scope": n => { lobbyBypassSettings.scope = n.getEnumValue<LobbyBypassScope>(LobbyBypassScope) as any ; },
    }
}
