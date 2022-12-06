import {deserializeIntoAlternativeSecurityId} from './deserializeIntoAlternativeSecurityId';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {Device} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDevice(device: Device | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(device),
        "accountEnabled": n => { device.accountEnabled = n.getBooleanValue() as any ; },
        "alternativeSecurityIds": n => { device.alternativeSecurityIds = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlternativeSecurityId) as any ; },
        "approximateLastSignInDateTime": n => { device.approximateLastSignInDateTime = n.getDateValue() as any ; },
        "complianceExpirationDateTime": n => { device.complianceExpirationDateTime = n.getDateValue() as any ; },
        "deviceId": n => { device.deviceId = n.getStringValue() as any ; },
        "deviceMetadata": n => { device.deviceMetadata = n.getStringValue() as any ; },
        "deviceVersion": n => { device.deviceVersion = n.getNumberValue() as any ; },
        "displayName": n => { device.displayName = n.getStringValue() as any ; },
        "extensions": n => { device.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "isCompliant": n => { device.isCompliant = n.getBooleanValue() as any ; },
        "isManaged": n => { device.isManaged = n.getBooleanValue() as any ; },
        "mdmAppId": n => { device.mdmAppId = n.getStringValue() as any ; },
        "memberOf": n => { device.memberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "onPremisesLastSyncDateTime": n => { device.onPremisesLastSyncDateTime = n.getDateValue() as any ; },
        "onPremisesSyncEnabled": n => { device.onPremisesSyncEnabled = n.getBooleanValue() as any ; },
        "operatingSystem": n => { device.operatingSystem = n.getStringValue() as any ; },
        "operatingSystemVersion": n => { device.operatingSystemVersion = n.getStringValue() as any ; },
        "physicalIds": n => { device.physicalIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "profileType": n => { device.profileType = n.getStringValue() as any ; },
        "registeredOwners": n => { device.registeredOwners = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "registeredUsers": n => { device.registeredUsers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "systemLabels": n => { device.systemLabels = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "transitiveMemberOf": n => { device.transitiveMemberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "trustType": n => { device.trustType = n.getStringValue() as any ; },
    }
}
