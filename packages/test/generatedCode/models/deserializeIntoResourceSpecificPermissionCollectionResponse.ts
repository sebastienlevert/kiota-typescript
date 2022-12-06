import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoResourceSpecificPermission} from './deserializeIntoResourceSpecificPermission';
import {ResourceSpecificPermissionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceSpecificPermissionCollectionResponse(resourceSpecificPermissionCollectionResponse: ResourceSpecificPermissionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(resourceSpecificPermissionCollectionResponse),
        "value": n => { resourceSpecificPermissionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceSpecificPermission) as any ; },
    }
}
