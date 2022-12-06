import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAppProtection} from './deserializeIntoManagedAppProtection';
import {ManagedAppProtectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppProtectionCollectionResponse(managedAppProtectionCollectionResponse: ManagedAppProtectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppProtectionCollectionResponse),
        "value": n => { managedAppProtectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppProtection) as any ; },
    }
}
