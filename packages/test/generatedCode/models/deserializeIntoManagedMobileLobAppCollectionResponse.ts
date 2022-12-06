import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedMobileLobApp} from './deserializeIntoManagedMobileLobApp';
import {ManagedMobileLobAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedMobileLobAppCollectionResponse(managedMobileLobAppCollectionResponse: ManagedMobileLobAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedMobileLobAppCollectionResponse),
        "value": n => { managedMobileLobAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedMobileLobApp) as any ; },
    }
}
