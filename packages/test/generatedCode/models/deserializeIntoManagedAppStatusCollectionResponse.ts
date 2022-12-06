import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAppStatus} from './deserializeIntoManagedAppStatus';
import {ManagedAppStatusCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppStatusCollectionResponse(managedAppStatusCollectionResponse: ManagedAppStatusCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppStatusCollectionResponse),
        "value": n => { managedAppStatusCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppStatus) as any ; },
    }
}
