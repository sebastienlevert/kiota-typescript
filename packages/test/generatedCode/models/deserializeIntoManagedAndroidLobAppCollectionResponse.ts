import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAndroidLobApp} from './deserializeIntoManagedAndroidLobApp';
import {ManagedAndroidLobAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAndroidLobAppCollectionResponse(managedAndroidLobAppCollectionResponse: ManagedAndroidLobAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAndroidLobAppCollectionResponse),
        "value": n => { managedAndroidLobAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAndroidLobApp) as any ; },
    }
}
