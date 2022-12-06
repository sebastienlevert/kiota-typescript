import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAndroidStoreApp} from './deserializeIntoManagedAndroidStoreApp';
import {ManagedAndroidStoreAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAndroidStoreAppCollectionResponse(managedAndroidStoreAppCollectionResponse: ManagedAndroidStoreAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAndroidStoreAppCollectionResponse),
        "value": n => { managedAndroidStoreAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAndroidStoreApp) as any ; },
    }
}
