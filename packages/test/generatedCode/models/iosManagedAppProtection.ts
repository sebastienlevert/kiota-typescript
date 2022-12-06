import {ManagedAppPolicyDeploymentSummary, ManagedMobileApp, TargetedManagedAppProtection} from './index';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosManagedAppProtection extends Partial<Parsable>, TargetedManagedAppProtection {
    /** Represents the level to which app data is encrypted for managed apps */
    appDataEncryptionType?: ManagedAppDataEncryptionType;
    /** List of apps to which the policy is deployed. */
    apps?: ManagedMobileApp[];
    /** A custom browser protocol to open weblink on iOS. When this property is configured, ManagedBrowserToOpenLinksRequired should be true. */
    customBrowserProtocol?: string;
    /** Count of apps to which the current policy is deployed. */
    deployedAppCount?: number;
    /** Navigation property to deployment summary of the configuration. */
    deploymentSummary?: ManagedAppPolicyDeploymentSummary;
    /** Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. */
    faceIdBlocked?: boolean;
    /** Versions less than the specified version will block the managed app from accessing company data. */
    minimumRequiredSdkVersion?: string;
}
