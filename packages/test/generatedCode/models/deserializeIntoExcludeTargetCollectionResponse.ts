import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoExcludeTarget} from './deserializeIntoExcludeTarget';
import {ExcludeTargetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExcludeTargetCollectionResponse(excludeTargetCollectionResponse: ExcludeTargetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(excludeTargetCollectionResponse),
        "value": n => { excludeTargetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExcludeTarget) as any ; },
    }
}
