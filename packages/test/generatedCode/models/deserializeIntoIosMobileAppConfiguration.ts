import {deserializeIntoAppConfigurationSettingItem} from './deserializeIntoAppConfigurationSettingItem';
import {deserializeIntoManagedDeviceMobileAppConfiguration} from './deserializeIntoManagedDeviceMobileAppConfiguration';
import {IosMobileAppConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosMobileAppConfiguration(iosMobileAppConfiguration: IosMobileAppConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedDeviceMobileAppConfiguration(iosMobileAppConfiguration),
        "encodedSettingXml": n => { iosMobileAppConfiguration.encodedSettingXml = n.getStringValue() as any ; },
        "settings": n => { iosMobileAppConfiguration.settings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppConfigurationSettingItem) as any ; },
    }
}
