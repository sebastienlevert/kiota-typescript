import {deserializeIntoAlternativeSecurityId} from './deserializeIntoAlternativeSecurityId';
import {deserializeIntoCommand} from './deserializeIntoCommand';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoOnPremisesExtensionAttributes} from './deserializeIntoOnPremisesExtensionAttributes';
import {deserializeIntoUsageRight} from './deserializeIntoUsageRight';
import {Device} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDevice(device: Device | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(device),
        "accountEnabled": n => { device.accountEnabled = n.getBooleanValue() as any ; },
        "alternativeSecurityIds": n => { device.alternativeSecurityIds = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlternativeSecurityId) as any ; },
        "approximateLastSignInDateTime": n => { device.approximateLastSignInDateTime = n.getDateValue() as any ; },
        "commands": n => { device.commands = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCommand) as any ; },
        "complianceExpirationDateTime": n => { device.complianceExpirationDateTime = n.getDateValue() as any ; },
        "deviceCategory": n => { device.deviceCategory = n.getStringValue() as any ; },
        "deviceId": n => { device.deviceId = n.getStringValue() as any ; },
        "deviceMetadata": n => { device.deviceMetadata = n.getStringValue() as any ; },
        "deviceOwnership": n => { device.deviceOwnership = n.getStringValue() as any ; },
        "deviceVersion": n => { device.deviceVersion = n.getNumberValue() as any ; },
        "displayName": n => { device.displayName = n.getStringValue() as any ; },
        "domainName": n => { device.domainName = n.getStringValue() as any ; },
        "enrollmentProfileName": n => { device.enrollmentProfileName = n.getStringValue() as any ; },
        "enrollmentType": n => { device.enrollmentType = n.getStringValue() as any ; },
        "extensionAttributes": n => { device.extensionAttributes = n.getObject(deserializeIntoOnPremisesExtensionAttributes) as any ; },
        "extensions": n => { device.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "hostnames": n => { device.hostnames = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "isCompliant": n => { device.isCompliant = n.getBooleanValue() as any ; },
        "isManaged": n => { device.isManaged = n.getBooleanValue() as any ; },
        "isManagementRestricted": n => { device.isManagementRestricted = n.getBooleanValue() as any ; },
        "isRooted": n => { device.isRooted = n.getBooleanValue() as any ; },
        "kind": n => { device.kind = n.getStringValue() as any ; },
        "managementType": n => { device.managementType = n.getStringValue() as any ; },
        "manufacturer": n => { device.manufacturer = n.getStringValue() as any ; },
        "mdmAppId": n => { device.mdmAppId = n.getStringValue() as any ; },
        "memberOf": n => { device.memberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "model": n => { device.model = n.getStringValue() as any ; },
        "name": n => { device.name = n.getStringValue() as any ; },
        "onPremisesLastSyncDateTime": n => { device.onPremisesLastSyncDateTime = n.getDateValue() as any ; },
        "onPremisesSyncEnabled": n => { device.onPremisesSyncEnabled = n.getBooleanValue() as any ; },
        "operatingSystem": n => { device.operatingSystem = n.getStringValue() as any ; },
        "operatingSystemVersion": n => { device.operatingSystemVersion = n.getStringValue() as any ; },
        "physicalIds": n => { device.physicalIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "platform": n => { device.platform = n.getStringValue() as any ; },
        "profileType": n => { device.profileType = n.getStringValue() as any ; },
        "registeredOwners": n => { device.registeredOwners = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "registeredUsers": n => { device.registeredUsers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "registrationDateTime": n => { device.registrationDateTime = n.getDateValue() as any ; },
        "status": n => { device.status = n.getStringValue() as any ; },
        "systemLabels": n => { device.systemLabels = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "transitiveMemberOf": n => { device.transitiveMemberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "trustType": n => { device.trustType = n.getStringValue() as any ; },
        "usageRights": n => { device.usageRights = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUsageRight) as any ; },
    }
}
