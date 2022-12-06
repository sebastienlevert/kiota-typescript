import {deserializeIntoDeviceEnrollmentConfiguration} from './deserializeIntoDeviceEnrollmentConfiguration';
import {deserializeIntoDeviceEnrollmentPlatformRestriction} from './deserializeIntoDeviceEnrollmentPlatformRestriction';
import {DeviceEnrollmentPlatformRestrictionsConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration(deviceEnrollmentPlatformRestrictionsConfiguration: DeviceEnrollmentPlatformRestrictionsConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceEnrollmentConfiguration(deviceEnrollmentPlatformRestrictionsConfiguration),
        "androidRestriction": n => { deviceEnrollmentPlatformRestrictionsConfiguration.androidRestriction = n.getObject(deserializeIntoDeviceEnrollmentPlatformRestriction) as any ; },
        "iosRestriction": n => { deviceEnrollmentPlatformRestrictionsConfiguration.iosRestriction = n.getObject(deserializeIntoDeviceEnrollmentPlatformRestriction) as any ; },
        "macOSRestriction": n => { deviceEnrollmentPlatformRestrictionsConfiguration.macOSRestriction = n.getObject(deserializeIntoDeviceEnrollmentPlatformRestriction) as any ; },
        "windowsMobileRestriction": n => { deviceEnrollmentPlatformRestrictionsConfiguration.windowsMobileRestriction = n.getObject(deserializeIntoDeviceEnrollmentPlatformRestriction) as any ; },
        "windowsRestriction": n => { deviceEnrollmentPlatformRestrictionsConfiguration.windowsRestriction = n.getObject(deserializeIntoDeviceEnrollmentPlatformRestriction) as any ; },
    }
}
