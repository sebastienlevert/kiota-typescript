import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoConditionalAccessPolicy} from './deserializeIntoConditionalAccessPolicy';
import {ConditionalAccessPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessPolicyCollectionResponse(conditionalAccessPolicyCollectionResponse: ConditionalAccessPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(conditionalAccessPolicyCollectionResponse),
        "value": n => { conditionalAccessPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConditionalAccessPolicy) as any ; },
    }
}
