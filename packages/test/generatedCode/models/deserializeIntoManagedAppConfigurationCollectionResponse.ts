import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAppConfiguration} from './deserializeIntoManagedAppConfiguration';
import {ManagedAppConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppConfigurationCollectionResponse(managedAppConfigurationCollectionResponse: ManagedAppConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppConfigurationCollectionResponse),
        "value": n => { managedAppConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppConfiguration) as any ; },
    }
}
