import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {AppleDeviceFeaturesConfigurationBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppleDeviceFeaturesConfigurationBase(appleDeviceFeaturesConfigurationBase: AppleDeviceFeaturesConfigurationBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(appleDeviceFeaturesConfigurationBase),
    }
}
