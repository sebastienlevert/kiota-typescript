import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedDeviceMobileAppConfigurationUserStatus} from './deserializeIntoManagedDeviceMobileAppConfigurationUserStatus';
import {ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationUserStatusCollectionResponse(managedDeviceMobileAppConfigurationUserStatusCollectionResponse: ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceMobileAppConfigurationUserStatusCollectionResponse),
        "value": n => { managedDeviceMobileAppConfigurationUserStatusCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDeviceMobileAppConfigurationUserStatus) as any ; },
    }
}
