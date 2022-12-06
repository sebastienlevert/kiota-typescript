import {DeviceEnrollmentPlatformRestriction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentPlatformRestriction(deviceEnrollmentPlatformRestriction: DeviceEnrollmentPlatformRestriction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { deviceEnrollmentPlatformRestriction.odataType = n.getStringValue() as any ; },
        "osMaximumVersion": n => { deviceEnrollmentPlatformRestriction.osMaximumVersion = n.getStringValue() as any ; },
        "osMinimumVersion": n => { deviceEnrollmentPlatformRestriction.osMinimumVersion = n.getStringValue() as any ; },
        "personalDeviceEnrollmentBlocked": n => { deviceEnrollmentPlatformRestriction.personalDeviceEnrollmentBlocked = n.getBooleanValue() as any ; },
        "platformBlocked": n => { deviceEnrollmentPlatformRestriction.platformBlocked = n.getBooleanValue() as any ; },
    }
}
