import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDelegatedPermissionClassification} from './deserializeIntoDelegatedPermissionClassification';
import {DelegatedPermissionClassificationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedPermissionClassificationCollectionResponse(delegatedPermissionClassificationCollectionResponse: DelegatedPermissionClassificationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedPermissionClassificationCollectionResponse),
        "value": n => { delegatedPermissionClassificationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDelegatedPermissionClassification) as any ; },
    }
}
