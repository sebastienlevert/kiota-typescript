import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedIOSLobApp} from './deserializeIntoManagedIOSLobApp';
import {ManagedIOSLobAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedIOSLobAppCollectionResponse(managedIOSLobAppCollectionResponse: ManagedIOSLobAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedIOSLobAppCollectionResponse),
        "value": n => { managedIOSLobAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedIOSLobApp) as any ; },
    }
}
