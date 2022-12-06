import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDirectoryRoleTemplate} from './deserializeIntoDirectoryRoleTemplate';
import {DirectoryRoleTemplateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryRoleTemplateCollectionResponse(directoryRoleTemplateCollectionResponse: DirectoryRoleTemplateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryRoleTemplateCollectionResponse),
        "value": n => { directoryRoleTemplateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryRoleTemplate) as any ; },
    }
}
