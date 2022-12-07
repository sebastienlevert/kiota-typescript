import {LobbyBypassSettings} from './index';
import {LobbyBypassScope} from './lobbyBypassScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLobbyBypassSettings(writer: SerializationWriter, lobbyBypassSettings: LobbyBypassSettings | undefined = {}) : void {
            writer.writeBooleanValue("isDialInBypassEnabled", lobbyBypassSettings.isDialInBypassEnabled);
            writer.writeEnumValue<LobbyBypassScope>("scope", lobbyBypassSettings.scope);
}
