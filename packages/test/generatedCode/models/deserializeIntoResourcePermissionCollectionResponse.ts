import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoResourcePermission} from './deserializeIntoResourcePermission';
import {ResourcePermissionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourcePermissionCollectionResponse(resourcePermissionCollectionResponse: ResourcePermissionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(resourcePermissionCollectionResponse),
        "value": n => { resourcePermissionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourcePermission) as any ; },
    }
}
