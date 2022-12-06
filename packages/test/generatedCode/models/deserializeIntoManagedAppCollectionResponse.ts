import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedApp} from './deserializeIntoManagedApp';
import {ManagedAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppCollectionResponse(managedAppCollectionResponse: ManagedAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppCollectionResponse),
        "value": n => { managedAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedApp) as any ; },
    }
}
