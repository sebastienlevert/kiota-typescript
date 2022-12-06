import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DirectoryObjectCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryObjectCollectionResponse(directoryObjectCollectionResponse: DirectoryObjectCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryObjectCollectionResponse),
        "value": n => { directoryObjectCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
    }
}
