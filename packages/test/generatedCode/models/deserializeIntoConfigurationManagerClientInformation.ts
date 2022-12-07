import {ConfigurationManagerClientInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConfigurationManagerClientInformation(configurationManagerClientInformation: ConfigurationManagerClientInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clientIdentifier": n => { configurationManagerClientInformation.clientIdentifier = n.getStringValue() as any ; },
        "clientVersion": n => { configurationManagerClientInformation.clientVersion = n.getStringValue() as any ; },
        "isBlocked": n => { configurationManagerClientInformation.isBlocked = n.getBooleanValue() as any ; },
    }
}
