import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoGroupLifecyclePolicy} from './deserializeIntoGroupLifecyclePolicy';
import {GroupLifecyclePolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupLifecyclePolicyCollectionResponse(groupLifecyclePolicyCollectionResponse: GroupLifecyclePolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupLifecyclePolicyCollectionResponse),
        "value": n => { groupLifecyclePolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoGroupLifecyclePolicy) as any ; },
    }
}
