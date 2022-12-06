import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {DeviceCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosCompliancePolicy extends DeviceCompliancePolicy, Partial<Parsable> {
    /** Require that devices have enabled device threat protection . */
    deviceThreatProtectionEnabled?: boolean;
    /** Device threat protection levels for the Device Threat Protection API. */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel;
    /** Indicates whether or not to require a managed email profile. */
    managedEmailProfileRequired?: boolean;
    /** Maximum IOS version. */
    osMaximumVersion?: string;
    /** Minimum IOS version. */
    osMinimumVersion?: string;
    /** Indicates whether or not to block simple passcodes. */
    passcodeBlockSimple?: boolean;
    /** Number of days before the passcode expires. Valid values 1 to 65535 */
    passcodeExpirationDays?: number;
    /** The number of character sets required in the password. */
    passcodeMinimumCharacterSetCount?: number;
    /** Minimum length of passcode. Valid values 4 to 14 */
    passcodeMinimumLength?: number;
    /** Minutes of inactivity before a passcode is required. */
    passcodeMinutesOfInactivityBeforeLock?: number;
    /** Number of previous passcodes to block. Valid values 1 to 24 */
    passcodePreviousPasscodeBlockCount?: number;
    /** Indicates whether or not to require a passcode. */
    passcodeRequired?: boolean;
    /** Possible values of required passwords. */
    passcodeRequiredType?: RequiredPasswordType;
    /** Devices must not be jailbroken or rooted. */
    securityBlockJailbrokenDevices?: boolean;
}
