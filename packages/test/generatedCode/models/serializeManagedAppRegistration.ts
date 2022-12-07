import {ManagedAppRegistration} from './index';
import {ManagedAppFlaggedReason} from './managedAppFlaggedReason';
import {serializeEntity} from './serializeEntity';
import {serializeManagedAppOperation} from './serializeManagedAppOperation';
import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
import {serializeMobileAppIdentifier} from './serializeMobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppRegistration(writer: SerializationWriter, managedAppRegistration: ManagedAppRegistration | undefined = {}) : void {
        serializeEntity(writer, managedAppRegistration)
            writer.writeObjectValueFromMethod("appIdentifier", managedAppRegistration.appIdentifier as any, serializeMobileAppIdentifier);
            writer.writeStringValue("applicationVersion", managedAppRegistration.applicationVersion);
            writer.writeCollectionOfObjectValuesFromMethod("appliedPolicies", managedAppRegistration.appliedPolicies as any, serializeManagedAppPolicy);
            writer.writeStringValue("azureADDeviceId", managedAppRegistration.azureADDeviceId);
            writer.writeDateValue("createdDateTime", managedAppRegistration.createdDateTime);
            writer.writeStringValue("deviceManufacturer", managedAppRegistration.deviceManufacturer);
            writer.writeStringValue("deviceModel", managedAppRegistration.deviceModel);
            writer.writeStringValue("deviceName", managedAppRegistration.deviceName);
            writer.writeStringValue("deviceTag", managedAppRegistration.deviceTag);
            writer.writeStringValue("deviceType", managedAppRegistration.deviceType);
            //writer.writeEnumValue<ManagedAppFlaggedReason>("flaggedReasons", managedAppRegistration.flaggedReasons);
            writer.writeCollectionOfObjectValuesFromMethod("intendedPolicies", managedAppRegistration.intendedPolicies as any, serializeManagedAppPolicy);
            writer.writeDateValue("lastSyncDateTime", managedAppRegistration.lastSyncDateTime);
            writer.writeStringValue("managedDeviceId", managedAppRegistration.managedDeviceId);
            writer.writeStringValue("managementSdkVersion", managedAppRegistration.managementSdkVersion);
            writer.writeCollectionOfObjectValuesFromMethod("operations", managedAppRegistration.operations as any, serializeManagedAppOperation);
            writer.writeStringValue("platformVersion", managedAppRegistration.platformVersion);
            writer.writeStringValue("userId", managedAppRegistration.userId);
            writer.writeStringValue("version", managedAppRegistration.version);
}
