import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPermission} from './deserializeIntoPermission';
import {PermissionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionCollectionResponse(permissionCollectionResponse: PermissionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(permissionCollectionResponse),
        "value": n => { permissionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermission) as any ; },
    }
}
