import {ConfigurationManagerClientEnabledFeatures} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfigurationManagerClientEnabledFeatures(writer: SerializationWriter, configurationManagerClientEnabledFeatures: ConfigurationManagerClientEnabledFeatures | undefined = {}) : void {
            writer.writeBooleanValue("compliancePolicy", configurationManagerClientEnabledFeatures.compliancePolicy);
            writer.writeBooleanValue("deviceConfiguration", configurationManagerClientEnabledFeatures.deviceConfiguration);
            writer.writeBooleanValue("endpointProtection", configurationManagerClientEnabledFeatures.endpointProtection);
            writer.writeBooleanValue("inventory", configurationManagerClientEnabledFeatures.inventory);
            writer.writeBooleanValue("modernApps", configurationManagerClientEnabledFeatures.modernApps);
            writer.writeBooleanValue("officeApps", configurationManagerClientEnabledFeatures.officeApps);
            writer.writeBooleanValue("resourceAccess", configurationManagerClientEnabledFeatures.resourceAccess);
            writer.writeBooleanValue("windowsUpdateForBusiness", configurationManagerClientEnabledFeatures.windowsUpdateForBusiness);
}
