import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoManagedAppOperation} from './deserializeIntoManagedAppOperation';
import {deserializeIntoManagedAppPolicy} from './deserializeIntoManagedAppPolicy';
import {deserializeIntoMobileAppIdentifier} from './deserializeIntoMobileAppIdentifier';
import {ManagedAppRegistration} from './index';
import {ManagedAppFlaggedReason} from './managedAppFlaggedReason';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppRegistration(managedAppRegistration: ManagedAppRegistration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedAppRegistration),
        "appIdentifier": n => { managedAppRegistration.appIdentifier = n.getObject(deserializeIntoMobileAppIdentifier) as any ; },
        "applicationVersion": n => { managedAppRegistration.applicationVersion = n.getStringValue() as any ; },
        "appliedPolicies": n => { managedAppRegistration.appliedPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppPolicy) as any ; },
        "azureADDeviceId": n => { managedAppRegistration.azureADDeviceId = n.getStringValue() as any ; },
        "createdDateTime": n => { managedAppRegistration.createdDateTime = n.getDateValue() as any ; },
        "deviceManufacturer": n => { managedAppRegistration.deviceManufacturer = n.getStringValue() as any ; },
        "deviceModel": n => { managedAppRegistration.deviceModel = n.getStringValue() as any ; },
        "deviceName": n => { managedAppRegistration.deviceName = n.getStringValue() as any ; },
        "deviceTag": n => { managedAppRegistration.deviceTag = n.getStringValue() as any ; },
        "deviceType": n => { managedAppRegistration.deviceType = n.getStringValue() as any ; },
        "flaggedReasons": n => { managedAppRegistration.flaggedReasons = n.getEnumValues<ManagedAppFlaggedReason>(ManagedAppFlaggedReason) as any ; },
        "intendedPolicies": n => { managedAppRegistration.intendedPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppPolicy) as any ; },
        "lastSyncDateTime": n => { managedAppRegistration.lastSyncDateTime = n.getDateValue() as any ; },
        "managedDeviceId": n => { managedAppRegistration.managedDeviceId = n.getStringValue() as any ; },
        "managementSdkVersion": n => { managedAppRegistration.managementSdkVersion = n.getStringValue() as any ; },
        "operations": n => { managedAppRegistration.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppOperation) as any ; },
        "platformVersion": n => { managedAppRegistration.platformVersion = n.getStringValue() as any ; },
        "userId": n => { managedAppRegistration.userId = n.getStringValue() as any ; },
        "version": n => { managedAppRegistration.version = n.getStringValue() as any ; },
    }
}
