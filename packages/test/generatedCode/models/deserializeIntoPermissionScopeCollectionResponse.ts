import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPermissionScope} from './deserializeIntoPermissionScope';
import {PermissionScopeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionScopeCollectionResponse(permissionScopeCollectionResponse: PermissionScopeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(permissionScopeCollectionResponse),
        "value": n => { permissionScopeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermissionScope) as any ; },
    }
}
