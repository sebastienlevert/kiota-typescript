import {DefaultManagedAppProtection} from './index';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {serializeManagedAppPolicyDeploymentSummary} from './serializeManagedAppPolicyDeploymentSummary';
import {serializeManagedAppProtection} from './serializeManagedAppProtection';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDefaultManagedAppProtection(writer: SerializationWriter, defaultManagedAppProtection: DefaultManagedAppProtection | undefined = {}) : void {
        serializeManagedAppProtection(writer, defaultManagedAppProtection)
            writer.writeEnumValue<ManagedAppDataEncryptionType>("appDataEncryptionType", defaultManagedAppProtection.appDataEncryptionType);
            writer.writeCollectionOfObjectValuesFromMethod("apps", defaultManagedAppProtection.apps as any, serializeManagedMobileApp);
            writer.writeCollectionOfObjectValuesFromMethod("customSettings", defaultManagedAppProtection.customSettings as any, serializeKeyValuePair);
            writer.writeNumberValue("deployedAppCount", defaultManagedAppProtection.deployedAppCount);
            writer.writeObjectValueFromMethod("deploymentSummary", defaultManagedAppProtection.deploymentSummary as any, serializeManagedAppPolicyDeploymentSummary);
            writer.writeBooleanValue("disableAppEncryptionIfDeviceEncryptionIsEnabled", defaultManagedAppProtection.disableAppEncryptionIfDeviceEncryptionIsEnabled);
            writer.writeBooleanValue("encryptAppData", defaultManagedAppProtection.encryptAppData);
            writer.writeBooleanValue("faceIdBlocked", defaultManagedAppProtection.faceIdBlocked);
            writer.writeStringValue("minimumRequiredPatchVersion", defaultManagedAppProtection.minimumRequiredPatchVersion);
            writer.writeStringValue("minimumRequiredSdkVersion", defaultManagedAppProtection.minimumRequiredSdkVersion);
            writer.writeStringValue("minimumWarningPatchVersion", defaultManagedAppProtection.minimumWarningPatchVersion);
            writer.writeBooleanValue("screenCaptureBlocked", defaultManagedAppProtection.screenCaptureBlocked);
}
