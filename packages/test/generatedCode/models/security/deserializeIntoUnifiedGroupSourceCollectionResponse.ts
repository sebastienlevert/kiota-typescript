import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedGroupSource} from './deserializeIntoUnifiedGroupSource';
import {UnifiedGroupSourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedGroupSourceCollectionResponse(unifiedGroupSourceCollectionResponse: UnifiedGroupSourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedGroupSourceCollectionResponse),
        "value": n => { unifiedGroupSourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedGroupSource) as any ; },
    }
}
