import {ConfigurationManagerClientInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfigurationManagerClientInformation(writer: SerializationWriter, configurationManagerClientInformation: ConfigurationManagerClientInformation | undefined = {}) : void {
            writer.writeStringValue("clientIdentifier", configurationManagerClientInformation.clientIdentifier);
            writer.writeStringValue("clientVersion", configurationManagerClientInformation.clientVersion);
            writer.writeBooleanValue("isBlocked", configurationManagerClientInformation.isBlocked);
}
