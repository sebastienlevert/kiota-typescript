import {deserializeIntoAppliedConditionalAccessPolicy} from './deserializeIntoAppliedConditionalAccessPolicy';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AppliedConditionalAccessPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppliedConditionalAccessPolicyCollectionResponse(appliedConditionalAccessPolicyCollectionResponse: AppliedConditionalAccessPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(appliedConditionalAccessPolicyCollectionResponse),
        "value": n => { appliedConditionalAccessPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppliedConditionalAccessPolicy) as any ; },
    }
}
