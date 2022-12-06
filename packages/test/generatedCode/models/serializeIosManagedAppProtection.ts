import {IosManagedAppProtection} from './index';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {serializeManagedAppPolicyDeploymentSummary} from './serializeManagedAppPolicyDeploymentSummary';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {serializeTargetedManagedAppProtection} from './serializeTargetedManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosManagedAppProtection(writer: SerializationWriter, iosManagedAppProtection: IosManagedAppProtection | undefined = {}) : void {
        serializeTargetedManagedAppProtection(writer, iosManagedAppProtection)
            writer.writeEnumValue<ManagedAppDataEncryptionType>("appDataEncryptionType", iosManagedAppProtection.appDataEncryptionType);
            writer.writeCollectionOfObjectValuesFromMethod("apps", iosManagedAppProtection.apps as any, serializeManagedMobileApp);
            writer.writeStringValue("customBrowserProtocol", iosManagedAppProtection.customBrowserProtocol);
            writer.writeNumberValue("deployedAppCount", iosManagedAppProtection.deployedAppCount);
            writer.writeObjectValueFromMethod("deploymentSummary", iosManagedAppProtection.deploymentSummary as any, serializeManagedAppPolicyDeploymentSummary);
            writer.writeBooleanValue("faceIdBlocked", iosManagedAppProtection.faceIdBlocked);
            writer.writeStringValue("minimumRequiredSdkVersion", iosManagedAppProtection.minimumRequiredSdkVersion);
}
