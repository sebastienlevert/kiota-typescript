import {AndroidManagedAppProtection} from './index';
import {serializeManagedAppPolicyDeploymentSummary} from './serializeManagedAppPolicyDeploymentSummary';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {serializeTargetedManagedAppProtection} from './serializeTargetedManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidManagedAppProtection(writer: SerializationWriter, androidManagedAppProtection: AndroidManagedAppProtection | undefined = {}) : void {
        serializeTargetedManagedAppProtection(writer, androidManagedAppProtection)
            writer.writeCollectionOfObjectValuesFromMethod("apps", androidManagedAppProtection.apps as any, serializeManagedMobileApp);
            writer.writeStringValue("customBrowserDisplayName", androidManagedAppProtection.customBrowserDisplayName);
            writer.writeStringValue("customBrowserPackageId", androidManagedAppProtection.customBrowserPackageId);
            writer.writeNumberValue("deployedAppCount", androidManagedAppProtection.deployedAppCount);
            writer.writeObjectValueFromMethod("deploymentSummary", androidManagedAppProtection.deploymentSummary as any, serializeManagedAppPolicyDeploymentSummary);
            writer.writeBooleanValue("disableAppEncryptionIfDeviceEncryptionIsEnabled", androidManagedAppProtection.disableAppEncryptionIfDeviceEncryptionIsEnabled);
            writer.writeBooleanValue("encryptAppData", androidManagedAppProtection.encryptAppData);
            writer.writeStringValue("minimumRequiredPatchVersion", androidManagedAppProtection.minimumRequiredPatchVersion);
            writer.writeStringValue("minimumWarningPatchVersion", androidManagedAppProtection.minimumWarningPatchVersion);
            writer.writeBooleanValue("screenCaptureBlocked", androidManagedAppProtection.screenCaptureBlocked);
}
