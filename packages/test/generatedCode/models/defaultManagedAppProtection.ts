import {KeyValuePair, ManagedAppPolicyDeploymentSummary, ManagedAppProtection, ManagedMobileApp} from './index';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DefaultManagedAppProtection extends ManagedAppProtection, Partial<Parsable> {
    /** Represents the level to which app data is encrypted for managed apps */
    appDataEncryptionType?: ManagedAppDataEncryptionType;
    /** List of apps to which the policy is deployed. */
    apps?: ManagedMobileApp[];
    /** A set of string key and string value pairs to be sent to the affected users, unalterned by this service */
    customSettings?: KeyValuePair[];
    /** Count of apps to which the current policy is deployed. */
    deployedAppCount?: number;
    /** Navigation property to deployment summary of the configuration. */
    deploymentSummary?: ManagedAppPolicyDeploymentSummary;
    /** When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only) */
    disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean;
    /** Indicates whether managed-app data should be encrypted. (Android only) */
    encryptAppData?: boolean;
    /** Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only) */
    faceIdBlocked?: boolean;
    /** Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android only) */
    minimumRequiredPatchVersion?: string;
    /** Versions less than the specified version will block the managed app from accessing company data. (iOS Only) */
    minimumRequiredSdkVersion?: string;
    /** Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only) */
    minimumWarningPatchVersion?: string;
    /** Indicates whether screen capture is blocked. (Android only) */
    screenCaptureBlocked?: boolean;
}
