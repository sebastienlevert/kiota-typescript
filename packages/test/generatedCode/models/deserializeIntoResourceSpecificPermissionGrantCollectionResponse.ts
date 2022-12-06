import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoResourceSpecificPermissionGrant} from './deserializeIntoResourceSpecificPermissionGrant';
import {ResourceSpecificPermissionGrantCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceSpecificPermissionGrantCollectionResponse(resourceSpecificPermissionGrantCollectionResponse: ResourceSpecificPermissionGrantCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(resourceSpecificPermissionGrantCollectionResponse),
        "value": n => { resourceSpecificPermissionGrantCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceSpecificPermissionGrant) as any ; },
    }
}
