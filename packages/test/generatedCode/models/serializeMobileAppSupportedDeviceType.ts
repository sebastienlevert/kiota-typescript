import {DeviceType} from './deviceType';
import {MobileAppSupportedDeviceType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppSupportedDeviceType(writer: SerializationWriter, mobileAppSupportedDeviceType: MobileAppSupportedDeviceType | undefined = {}) : void {
            writer.writeStringValue("maximumOperatingSystemVersion", mobileAppSupportedDeviceType.maximumOperatingSystemVersion);
            writer.writeStringValue("minimumOperatingSystemVersion", mobileAppSupportedDeviceType.minimumOperatingSystemVersion);
            writer.writeEnumValue<DeviceType>("type", mobileAppSupportedDeviceType.type);
}
