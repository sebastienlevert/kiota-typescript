import {AppleDeviceFeaturesConfigurationBase} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppleDeviceFeaturesConfigurationBase(writer: SerializationWriter, appleDeviceFeaturesConfigurationBase: AppleDeviceFeaturesConfigurationBase | undefined = {}) : void {
        serializeDeviceConfiguration(writer, appleDeviceFeaturesConfigurationBase)
}
