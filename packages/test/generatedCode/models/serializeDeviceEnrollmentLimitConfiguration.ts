import {DeviceEnrollmentLimitConfiguration} from './index';
import {serializeDeviceEnrollmentConfiguration} from './serializeDeviceEnrollmentConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentLimitConfiguration(writer: SerializationWriter, deviceEnrollmentLimitConfiguration: DeviceEnrollmentLimitConfiguration | undefined = {}) : void {
        serializeDeviceEnrollmentConfiguration(writer, deviceEnrollmentLimitConfiguration)
            writer.writeNumberValue("limit", deviceEnrollmentLimitConfiguration.limit);
}
