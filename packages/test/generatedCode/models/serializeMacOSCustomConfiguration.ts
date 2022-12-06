import {MacOSCustomConfiguration} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSCustomConfiguration(writer: SerializationWriter, macOSCustomConfiguration: MacOSCustomConfiguration | undefined = {}) : void {
        serializeDeviceConfiguration(writer, macOSCustomConfiguration)
            writer.writeStringValue("payload", macOSCustomConfiguration.payload);
            writer.writeStringValue("payloadFileName", macOSCustomConfiguration.payloadFileName);
            writer.writeStringValue("payloadName", macOSCustomConfiguration.payloadName);
}
