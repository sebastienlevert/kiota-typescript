import {deserializeIntoDeviceEnrollmentConfiguration} from './deserializeIntoDeviceEnrollmentConfiguration';
import {DeviceEnrollmentLimitConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentLimitConfiguration(deviceEnrollmentLimitConfiguration: DeviceEnrollmentLimitConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceEnrollmentConfiguration(deviceEnrollmentLimitConfiguration),
        "limit": n => { deviceEnrollmentLimitConfiguration.limit = n.getNumberValue() as any ; },
    }
}
