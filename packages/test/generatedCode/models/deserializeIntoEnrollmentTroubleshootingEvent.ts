import {deserializeIntoDeviceManagementTroubleshootingEvent} from './deserializeIntoDeviceManagementTroubleshootingEvent';
import {DeviceEnrollmentFailureReason} from './deviceEnrollmentFailureReason';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {EnrollmentTroubleshootingEvent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEnrollmentTroubleshootingEvent(enrollmentTroubleshootingEvent: EnrollmentTroubleshootingEvent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceManagementTroubleshootingEvent(enrollmentTroubleshootingEvent),
        "deviceId": n => { enrollmentTroubleshootingEvent.deviceId = n.getStringValue() as any ; },
        "enrollmentType": n => { enrollmentTroubleshootingEvent.enrollmentType = n.getEnumValue<DeviceEnrollmentType>(DeviceEnrollmentType) as any ; },
        "failureCategory": n => { enrollmentTroubleshootingEvent.failureCategory = n.getEnumValue<DeviceEnrollmentFailureReason>(DeviceEnrollmentFailureReason) as any ; },
        "failureReason": n => { enrollmentTroubleshootingEvent.failureReason = n.getStringValue() as any ; },
        "managedDeviceIdentifier": n => { enrollmentTroubleshootingEvent.managedDeviceIdentifier = n.getStringValue() as any ; },
        "operatingSystem": n => { enrollmentTroubleshootingEvent.operatingSystem = n.getStringValue() as any ; },
        "osVersion": n => { enrollmentTroubleshootingEvent.osVersion = n.getStringValue() as any ; },
        "userId": n => { enrollmentTroubleshootingEvent.userId = n.getStringValue() as any ; },
    }
}
