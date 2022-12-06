import {MacOSDeviceFeaturesConfiguration} from './index';
import {serializeAppleDeviceFeaturesConfigurationBase} from './serializeAppleDeviceFeaturesConfigurationBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSDeviceFeaturesConfiguration(writer: SerializationWriter, macOSDeviceFeaturesConfiguration: MacOSDeviceFeaturesConfiguration | undefined = {}) : void {
        serializeAppleDeviceFeaturesConfigurationBase(writer, macOSDeviceFeaturesConfiguration)
}
