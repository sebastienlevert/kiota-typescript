import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedEBook} from './deserializeIntoManagedEBook';
import {ManagedEBookCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedEBookCollectionResponse(managedEBookCollectionResponse: ManagedEBookCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedEBookCollectionResponse),
        "value": n => { managedEBookCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedEBook) as any ; },
    }
}
