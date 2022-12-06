import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDefaultManagedAppProtection} from './deserializeIntoDefaultManagedAppProtection';
import {DefaultManagedAppProtectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDefaultManagedAppProtectionCollectionResponse(defaultManagedAppProtectionCollectionResponse: DefaultManagedAppProtectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(defaultManagedAppProtectionCollectionResponse),
        "value": n => { defaultManagedAppProtectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDefaultManagedAppProtection) as any ; },
    }
}
