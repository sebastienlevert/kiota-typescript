import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoContactFolder} from './deserializeIntoContactFolder';
import {ContactFolderCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContactFolderCollectionResponse(contactFolderCollectionResponse: ContactFolderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contactFolderCollectionResponse),
        "value": n => { contactFolderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContactFolder) as any ; },
    }
}
