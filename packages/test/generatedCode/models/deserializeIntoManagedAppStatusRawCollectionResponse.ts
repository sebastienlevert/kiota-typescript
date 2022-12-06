import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAppStatusRaw} from './deserializeIntoManagedAppStatusRaw';
import {ManagedAppStatusRawCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppStatusRawCollectionResponse(managedAppStatusRawCollectionResponse: ManagedAppStatusRawCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppStatusRawCollectionResponse),
        "value": n => { managedAppStatusRawCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppStatusRaw) as any ; },
    }
}
