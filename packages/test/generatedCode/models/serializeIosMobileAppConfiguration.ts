import {IosMobileAppConfiguration} from './index';
import {serializeAppConfigurationSettingItem} from './serializeAppConfigurationSettingItem';
import {serializeManagedDeviceMobileAppConfiguration} from './serializeManagedDeviceMobileAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosMobileAppConfiguration(writer: SerializationWriter, iosMobileAppConfiguration: IosMobileAppConfiguration | undefined = {}) : void {
        serializeManagedDeviceMobileAppConfiguration(writer, iosMobileAppConfiguration)
            writer.writeStringValue("encodedSettingXml", iosMobileAppConfiguration.encodedSettingXml);
            writer.writeCollectionOfObjectValuesFromMethod("settings", iosMobileAppConfiguration.settings as any, serializeAppConfigurationSettingItem);
}
