import {deserializeIntoManagedAppPolicyDeploymentSummary} from './deserializeIntoManagedAppPolicyDeploymentSummary';
import {deserializeIntoManagedMobileApp} from './deserializeIntoManagedMobileApp';
import {deserializeIntoTargetedManagedAppProtection} from './deserializeIntoTargetedManagedAppProtection';
import {AndroidManagedAppProtection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidManagedAppProtection(androidManagedAppProtection: AndroidManagedAppProtection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTargetedManagedAppProtection(androidManagedAppProtection),
        "apps": n => { androidManagedAppProtection.apps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedMobileApp) as any ; },
        "customBrowserDisplayName": n => { androidManagedAppProtection.customBrowserDisplayName = n.getStringValue() as any ; },
        "customBrowserPackageId": n => { androidManagedAppProtection.customBrowserPackageId = n.getStringValue() as any ; },
        "deployedAppCount": n => { androidManagedAppProtection.deployedAppCount = n.getNumberValue() as any ; },
        "deploymentSummary": n => { androidManagedAppProtection.deploymentSummary = n.getObject(deserializeIntoManagedAppPolicyDeploymentSummary) as any ; },
        "disableAppEncryptionIfDeviceEncryptionIsEnabled": n => { androidManagedAppProtection.disableAppEncryptionIfDeviceEncryptionIsEnabled = n.getBooleanValue() as any ; },
        "encryptAppData": n => { androidManagedAppProtection.encryptAppData = n.getBooleanValue() as any ; },
        "minimumRequiredPatchVersion": n => { androidManagedAppProtection.minimumRequiredPatchVersion = n.getStringValue() as any ; },
        "minimumWarningPatchVersion": n => { androidManagedAppProtection.minimumWarningPatchVersion = n.getStringValue() as any ; },
        "screenCaptureBlocked": n => { androidManagedAppProtection.screenCaptureBlocked = n.getBooleanValue() as any ; },
    }
}
