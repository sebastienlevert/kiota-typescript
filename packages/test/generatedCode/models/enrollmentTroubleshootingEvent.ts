import {DeviceEnrollmentFailureReason} from './deviceEnrollmentFailureReason';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {DeviceManagementTroubleshootingEvent} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EnrollmentTroubleshootingEvent extends DeviceManagementTroubleshootingEvent, Partial<Parsable> {
    /** Azure AD device identifier. */
    deviceId?: string;
    /** Possible ways of adding a mobile device to management. */
    enrollmentType?: DeviceEnrollmentType;
    /** Top level failure categories for enrollment. */
    failureCategory?: DeviceEnrollmentFailureReason;
    /** Detailed failure reason. */
    failureReason?: string;
    /** Device identifier created or collected by Intune. */
    managedDeviceIdentifier?: string;
    /** Operating System. */
    operatingSystem?: string;
    /** OS Version. */
    osVersion?: string;
    /** Identifier for the user that tried to enroll the device. */
    userId?: string;
}
