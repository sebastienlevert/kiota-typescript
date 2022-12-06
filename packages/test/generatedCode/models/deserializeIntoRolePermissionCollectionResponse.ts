import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRolePermission} from './deserializeIntoRolePermission';
import {RolePermissionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRolePermissionCollectionResponse(rolePermissionCollectionResponse: RolePermissionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(rolePermissionCollectionResponse),
        "value": n => { rolePermissionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRolePermission) as any ; },
    }
}
