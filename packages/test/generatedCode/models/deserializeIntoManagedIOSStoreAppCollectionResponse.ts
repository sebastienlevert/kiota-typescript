import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedIOSStoreApp} from './deserializeIntoManagedIOSStoreApp';
import {ManagedIOSStoreAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedIOSStoreAppCollectionResponse(managedIOSStoreAppCollectionResponse: ManagedIOSStoreAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedIOSStoreAppCollectionResponse),
        "value": n => { managedIOSStoreAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedIOSStoreApp) as any ; },
    }
}
