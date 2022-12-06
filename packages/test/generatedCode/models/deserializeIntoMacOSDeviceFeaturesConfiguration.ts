import {deserializeIntoAppleDeviceFeaturesConfigurationBase} from './deserializeIntoAppleDeviceFeaturesConfigurationBase';
import {MacOSDeviceFeaturesConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSDeviceFeaturesConfiguration(macOSDeviceFeaturesConfiguration: MacOSDeviceFeaturesConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAppleDeviceFeaturesConfigurationBase(macOSDeviceFeaturesConfiguration),
    }
}
