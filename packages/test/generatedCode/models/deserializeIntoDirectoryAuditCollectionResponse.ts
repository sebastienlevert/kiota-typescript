import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDirectoryAudit} from './deserializeIntoDirectoryAudit';
import {DirectoryAuditCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryAuditCollectionResponse(directoryAuditCollectionResponse: DirectoryAuditCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryAuditCollectionResponse),
        "value": n => { directoryAuditCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryAudit) as any ; },
    }
}
