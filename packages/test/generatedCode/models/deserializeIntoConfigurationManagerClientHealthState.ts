import {ConfigurationManagerClientState} from './configurationManagerClientState';
import {ConfigurationManagerClientHealthState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConfigurationManagerClientHealthState(configurationManagerClientHealthState: ConfigurationManagerClientHealthState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "errorCode": n => { configurationManagerClientHealthState.errorCode = n.getNumberValue() as any ; },
        "lastSyncDateTime": n => { configurationManagerClientHealthState.lastSyncDateTime = n.getDateValue() as any ; },
        "state": n => { configurationManagerClientHealthState.state = n.getEnumValue<ConfigurationManagerClientState>(ConfigurationManagerClientState) as any ; },
    }
}
