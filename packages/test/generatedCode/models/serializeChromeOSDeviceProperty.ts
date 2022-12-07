import {ChromeOSDeviceProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChromeOSDeviceProperty(writer: SerializationWriter, chromeOSDeviceProperty: ChromeOSDeviceProperty | undefined = {}) : void {
            writer.writeStringValue("name", chromeOSDeviceProperty.name);
            writer.writeBooleanValue("updatable", chromeOSDeviceProperty.updatable);
            writer.writeStringValue("value", chromeOSDeviceProperty.value);
            writer.writeStringValue("valueType", chromeOSDeviceProperty.valueType);
}
