import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoResourceSpecificPermissionGrant} from '../../../models/deserializeIntoResourceSpecificPermissionGrant';
import {CheckGrantedPermissionsForAppResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckGrantedPermissionsForAppResponse(checkGrantedPermissionsForAppResponse: CheckGrantedPermissionsForAppResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(checkGrantedPermissionsForAppResponse),
        "value": n => { checkGrantedPermissionsForAppResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceSpecificPermissionGrant) as any ; },
    }
}
