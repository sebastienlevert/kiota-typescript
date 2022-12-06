import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPermissionGrantConditionSet} from './deserializeIntoPermissionGrantConditionSet';
import {PermissionGrantConditionSetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionGrantConditionSetCollectionResponse(permissionGrantConditionSetCollectionResponse: PermissionGrantConditionSetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(permissionGrantConditionSetCollectionResponse),
        "value": n => { permissionGrantConditionSetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermissionGrantConditionSet) as any ; },
    }
}
