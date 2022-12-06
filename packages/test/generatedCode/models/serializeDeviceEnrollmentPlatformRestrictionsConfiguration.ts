import {DeviceEnrollmentPlatformRestrictionsConfiguration} from './index';
import {serializeDeviceEnrollmentConfiguration} from './serializeDeviceEnrollmentConfiguration';
import {serializeDeviceEnrollmentPlatformRestriction} from './serializeDeviceEnrollmentPlatformRestriction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentPlatformRestrictionsConfiguration(writer: SerializationWriter, deviceEnrollmentPlatformRestrictionsConfiguration: DeviceEnrollmentPlatformRestrictionsConfiguration | undefined = {}) : void {
        serializeDeviceEnrollmentConfiguration(writer, deviceEnrollmentPlatformRestrictionsConfiguration)
            writer.writeObjectValueFromMethod("androidRestriction", deviceEnrollmentPlatformRestrictionsConfiguration.androidRestriction as any, serializeDeviceEnrollmentPlatformRestriction);
            writer.writeObjectValueFromMethod("iosRestriction", deviceEnrollmentPlatformRestrictionsConfiguration.iosRestriction as any, serializeDeviceEnrollmentPlatformRestriction);
            writer.writeObjectValueFromMethod("macOSRestriction", deviceEnrollmentPlatformRestrictionsConfiguration.macOSRestriction as any, serializeDeviceEnrollmentPlatformRestriction);
            writer.writeObjectValueFromMethod("windowsMobileRestriction", deviceEnrollmentPlatformRestrictionsConfiguration.windowsMobileRestriction as any, serializeDeviceEnrollmentPlatformRestriction);
            writer.writeObjectValueFromMethod("windowsRestriction", deviceEnrollmentPlatformRestrictionsConfiguration.windowsRestriction as any, serializeDeviceEnrollmentPlatformRestriction);
}
