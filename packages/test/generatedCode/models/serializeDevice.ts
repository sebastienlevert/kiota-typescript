import {Device} from './index';
import {serializeAlternativeSecurityId} from './serializeAlternativeSecurityId';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeExtension} from './serializeExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDevice(writer: SerializationWriter, device: Device | undefined = {}) : void {
        serializeDirectoryObject(writer, device)
            writer.writeBooleanValue("accountEnabled", device.accountEnabled);
            writer.writeCollectionOfObjectValuesFromMethod("alternativeSecurityIds", device.alternativeSecurityIds as any, serializeAlternativeSecurityId);
            writer.writeDateValue("approximateLastSignInDateTime", device.approximateLastSignInDateTime);
            writer.writeDateValue("complianceExpirationDateTime", device.complianceExpirationDateTime);
            writer.writeStringValue("deviceId", device.deviceId);
            writer.writeStringValue("deviceMetadata", device.deviceMetadata);
            writer.writeNumberValue("deviceVersion", device.deviceVersion);
            writer.writeStringValue("displayName", device.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("extensions", device.extensions as any, serializeExtension);
            writer.writeBooleanValue("isCompliant", device.isCompliant);
            writer.writeBooleanValue("isManaged", device.isManaged);
            writer.writeStringValue("mdmAppId", device.mdmAppId);
            writer.writeCollectionOfObjectValuesFromMethod("memberOf", device.memberOf as any, serializeDirectoryObject);
            writer.writeDateValue("onPremisesLastSyncDateTime", device.onPremisesLastSyncDateTime);
            writer.writeBooleanValue("onPremisesSyncEnabled", device.onPremisesSyncEnabled);
            writer.writeStringValue("operatingSystem", device.operatingSystem);
            writer.writeStringValue("operatingSystemVersion", device.operatingSystemVersion);
            writer.writeCollectionOfPrimitiveValues<string>("physicalIds", device.physicalIds);
            writer.writeStringValue("profileType", device.profileType);
            writer.writeCollectionOfObjectValuesFromMethod("registeredOwners", device.registeredOwners as any, serializeDirectoryObject);
            writer.writeCollectionOfObjectValuesFromMethod("registeredUsers", device.registeredUsers as any, serializeDirectoryObject);
            writer.writeCollectionOfPrimitiveValues<string>("systemLabels", device.systemLabels);
            writer.writeCollectionOfObjectValuesFromMethod("transitiveMemberOf", device.transitiveMemberOf as any, serializeDirectoryObject);
            writer.writeStringValue("trustType", device.trustType);
}
