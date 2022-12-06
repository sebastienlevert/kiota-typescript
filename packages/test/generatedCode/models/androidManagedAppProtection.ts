import {ManagedAppPolicyDeploymentSummary, ManagedMobileApp, TargetedManagedAppProtection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidManagedAppProtection extends Partial<Parsable>, TargetedManagedAppProtection {
    /** List of apps to which the policy is deployed. */
    apps?: ManagedMobileApp[];
    /** Friendly name of the preferred custom browser to open weblink on Android. When this property is configured, ManagedBrowserToOpenLinksRequired should be true. */
    customBrowserDisplayName?: string;
    /** Unique identifier of the preferred custom browser to open weblink on Android. When this property is configured, ManagedBrowserToOpenLinksRequired should be true. */
    customBrowserPackageId?: string;
    /** Count of apps to which the current policy is deployed. */
    deployedAppCount?: number;
    /** Navigation property to deployment summary of the configuration. */
    deploymentSummary?: ManagedAppPolicyDeploymentSummary;
    /** When this setting is enabled, app level encryption is disabled if device level encryption is enabled */
    disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean;
    /** Indicates whether application data for managed apps should be encrypted */
    encryptAppData?: boolean;
    /** Define the oldest required Android security patch level a user can have to gain secure access to the app. */
    minimumRequiredPatchVersion?: string;
    /** Define the oldest recommended Android security patch level a user can have for secure access to the app. */
    minimumWarningPatchVersion?: string;
    /** Indicates whether a managed user can take screen captures of managed apps */
    screenCaptureBlocked?: boolean;
}
