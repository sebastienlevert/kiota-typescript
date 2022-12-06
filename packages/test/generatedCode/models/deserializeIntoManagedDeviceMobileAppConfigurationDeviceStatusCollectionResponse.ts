import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus} from './deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus';
import {ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse(managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse: ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse),
        "value": n => { managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus) as any ; },
    }
}
