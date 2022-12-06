import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDirectoryObjectPartnerReference} from './deserializeIntoDirectoryObjectPartnerReference';
import {DirectoryObjectPartnerReferenceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryObjectPartnerReferenceCollectionResponse(directoryObjectPartnerReferenceCollectionResponse: DirectoryObjectPartnerReferenceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryObjectPartnerReferenceCollectionResponse),
        "value": n => { directoryObjectPartnerReferenceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObjectPartnerReference) as any ; },
    }
}
