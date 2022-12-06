import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDirectoryRole} from './deserializeIntoDirectoryRole';
import {DirectoryRoleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryRoleCollectionResponse(directoryRoleCollectionResponse: DirectoryRoleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryRoleCollectionResponse),
        "value": n => { directoryRoleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryRole) as any ; },
    }
}
