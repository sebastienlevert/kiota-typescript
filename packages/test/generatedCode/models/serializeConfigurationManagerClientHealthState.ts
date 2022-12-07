import {ConfigurationManagerClientState} from './configurationManagerClientState';
import {ConfigurationManagerClientHealthState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfigurationManagerClientHealthState(writer: SerializationWriter, configurationManagerClientHealthState: ConfigurationManagerClientHealthState | undefined = {}) : void {
            writer.writeNumberValue("errorCode", configurationManagerClientHealthState.errorCode);
            writer.writeDateValue("lastSyncDateTime", configurationManagerClientHealthState.lastSyncDateTime);
            writer.writeEnumValue<ConfigurationManagerClientState>("state", configurationManagerClientHealthState.state);
}
