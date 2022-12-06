import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {DeviceCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSCompliancePolicy extends DeviceCompliancePolicy, Partial<Parsable> {
    /** Require that devices have enabled device threat protection. */
    deviceThreatProtectionEnabled?: boolean;
    /** Device threat protection levels for the Device Threat Protection API. */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel;
    /** Corresponds to the 'Block all incoming connections' option. */
    firewallBlockAllIncoming?: boolean;
    /** Whether the firewall should be enabled or not. */
    firewallEnabled?: boolean;
    /** Corresponds to 'Enable stealth mode.' */
    firewallEnableStealthMode?: boolean;
    /** Maximum MacOS version. */
    osMaximumVersion?: string;
    /** Minimum MacOS version. */
    osMinimumVersion?: string;
    /** Indicates whether or not to block simple passwords. */
    passwordBlockSimple?: boolean;
    /** Number of days before the password expires. Valid values 1 to 65535 */
    passwordExpirationDays?: number;
    /** The number of character sets required in the password. */
    passwordMinimumCharacterSetCount?: number;
    /** Minimum length of password. Valid values 4 to 14 */
    passwordMinimumLength?: number;
    /** Minutes of inactivity before a password is required. */
    passwordMinutesOfInactivityBeforeLock?: number;
    /** Number of previous passwords to block. Valid values 1 to 24 */
    passwordPreviousPasswordBlockCount?: number;
    /** Whether or not to require a password. */
    passwordRequired?: boolean;
    /** Possible values of required passwords. */
    passwordRequiredType?: RequiredPasswordType;
    /** Require encryption on Mac OS devices. */
    storageRequireEncryption?: boolean;
    /** Require that devices have enabled system integrity protection. */
    systemIntegrityProtectionEnabled?: boolean;
}
