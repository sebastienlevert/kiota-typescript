import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPermissionGrantPolicy} from './deserializeIntoPermissionGrantPolicy';
import {PermissionGrantPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionGrantPolicyCollectionResponse(permissionGrantPolicyCollectionResponse: PermissionGrantPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(permissionGrantPolicyCollectionResponse),
        "value": n => { permissionGrantPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermissionGrantPolicy) as any ; },
    }
}
