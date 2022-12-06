import {deserializeIntoActivityBasedTimeoutPolicy} from './deserializeIntoActivityBasedTimeoutPolicy';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ActivityBasedTimeoutPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoActivityBasedTimeoutPolicyCollectionResponse(activityBasedTimeoutPolicyCollectionResponse: ActivityBasedTimeoutPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(activityBasedTimeoutPolicyCollectionResponse),
        "value": n => { activityBasedTimeoutPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoActivityBasedTimeoutPolicy) as any ; },
    }
}
