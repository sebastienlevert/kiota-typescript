import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoFeatureRolloutPolicy} from './deserializeIntoFeatureRolloutPolicy';
import {FeatureRolloutPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFeatureRolloutPolicyCollectionResponse(featureRolloutPolicyCollectionResponse: FeatureRolloutPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(featureRolloutPolicyCollectionResponse),
        "value": n => { featureRolloutPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFeatureRolloutPolicy) as any ; },
    }
}
