import {FeatureRolloutPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFeatureRolloutPolicy} from './serializeFeatureRolloutPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFeatureRolloutPolicyCollectionResponse(writer: SerializationWriter, featureRolloutPolicyCollectionResponse: FeatureRolloutPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, featureRolloutPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", featureRolloutPolicyCollectionResponse.value as any, serializeFeatureRolloutPolicy);
}
