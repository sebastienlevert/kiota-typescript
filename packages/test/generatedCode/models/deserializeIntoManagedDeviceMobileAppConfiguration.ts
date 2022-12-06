import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoManagedDeviceMobileAppConfigurationAssignment} from './deserializeIntoManagedDeviceMobileAppConfigurationAssignment';
import {deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus} from './deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus';
import {deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary} from './deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary';
import {deserializeIntoManagedDeviceMobileAppConfigurationUserStatus} from './deserializeIntoManagedDeviceMobileAppConfigurationUserStatus';
import {deserializeIntoManagedDeviceMobileAppConfigurationUserSummary} from './deserializeIntoManagedDeviceMobileAppConfigurationUserSummary';
import {ManagedDeviceMobileAppConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfiguration(managedDeviceMobileAppConfiguration: ManagedDeviceMobileAppConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfiguration),
        "assignments": n => { managedDeviceMobileAppConfiguration.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDeviceMobileAppConfigurationAssignment) as any ; },
        "createdDateTime": n => { managedDeviceMobileAppConfiguration.createdDateTime = n.getDateValue() as any ; },
        "description": n => { managedDeviceMobileAppConfiguration.description = n.getStringValue() as any ; },
        "deviceStatuses": n => { managedDeviceMobileAppConfiguration.deviceStatuses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus) as any ; },
        "deviceStatusSummary": n => { managedDeviceMobileAppConfiguration.deviceStatusSummary = n.getObject(deserializeIntoManagedDeviceMobileAppConfigurationDeviceSummary) as any ; },
        "displayName": n => { managedDeviceMobileAppConfiguration.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { managedDeviceMobileAppConfiguration.lastModifiedDateTime = n.getDateValue() as any ; },
        "targetedMobileApps": n => { managedDeviceMobileAppConfiguration.targetedMobileApps = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "userStatuses": n => { managedDeviceMobileAppConfiguration.userStatuses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDeviceMobileAppConfigurationUserStatus) as any ; },
        "userStatusSummary": n => { managedDeviceMobileAppConfiguration.userStatusSummary = n.getObject(deserializeIntoManagedDeviceMobileAppConfigurationUserSummary) as any ; },
        "version": n => { managedDeviceMobileAppConfiguration.version = n.getNumberValue() as any ; },
    }
}
