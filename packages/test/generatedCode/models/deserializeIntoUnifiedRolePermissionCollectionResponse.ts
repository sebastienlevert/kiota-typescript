import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRolePermission} from './deserializeIntoUnifiedRolePermission';
import {UnifiedRolePermissionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRolePermissionCollectionResponse(unifiedRolePermissionCollectionResponse: UnifiedRolePermissionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRolePermissionCollectionResponse),
        "value": n => { unifiedRolePermissionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRolePermission) as any ; },
    }
}
