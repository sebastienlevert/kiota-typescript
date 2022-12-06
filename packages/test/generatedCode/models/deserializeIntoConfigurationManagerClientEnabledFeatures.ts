import {ConfigurationManagerClientEnabledFeatures} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConfigurationManagerClientEnabledFeatures(configurationManagerClientEnabledFeatures: ConfigurationManagerClientEnabledFeatures | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "compliancePolicy": n => { configurationManagerClientEnabledFeatures.compliancePolicy = n.getBooleanValue() as any ; },
        "deviceConfiguration": n => { configurationManagerClientEnabledFeatures.deviceConfiguration = n.getBooleanValue() as any ; },
        "inventory": n => { configurationManagerClientEnabledFeatures.inventory = n.getBooleanValue() as any ; },
        "modernApps": n => { configurationManagerClientEnabledFeatures.modernApps = n.getBooleanValue() as any ; },
        "@odata.type": n => { configurationManagerClientEnabledFeatures.odataType = n.getStringValue() as any ; },
        "resourceAccess": n => { configurationManagerClientEnabledFeatures.resourceAccess = n.getBooleanValue() as any ; },
        "windowsUpdateForBusiness": n => { configurationManagerClientEnabledFeatures.windowsUpdateForBusiness = n.getBooleanValue() as any ; },
    }
}
