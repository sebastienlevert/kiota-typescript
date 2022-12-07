import {DeviceType} from './deviceType';
import {MobileAppSupportedDeviceType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppSupportedDeviceType(mobileAppSupportedDeviceType: MobileAppSupportedDeviceType | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "maximumOperatingSystemVersion": n => { mobileAppSupportedDeviceType.maximumOperatingSystemVersion = n.getStringValue() as any ; },
        "minimumOperatingSystemVersion": n => { mobileAppSupportedDeviceType.minimumOperatingSystemVersion = n.getStringValue() as any ; },
        "type": n => { mobileAppSupportedDeviceType.type = n.getEnumValue<DeviceType>(DeviceType) as any ; },
    }
}
