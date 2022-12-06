import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedDeviceMobileAppConfiguration} from './deserializeIntoManagedDeviceMobileAppConfiguration';
import {ManagedDeviceMobileAppConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationCollectionResponse(managedDeviceMobileAppConfigurationCollectionResponse: ManagedDeviceMobileAppConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceMobileAppConfigurationCollectionResponse),
        "value": n => { managedDeviceMobileAppConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDeviceMobileAppConfiguration) as any ; },
    }
}
