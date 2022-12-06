import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoInferenceClassificationOverride} from './deserializeIntoInferenceClassificationOverride';
import {InferenceClassificationOverrideCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInferenceClassificationOverrideCollectionResponse(inferenceClassificationOverrideCollectionResponse: InferenceClassificationOverrideCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(inferenceClassificationOverrideCollectionResponse),
        "value": n => { inferenceClassificationOverrideCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInferenceClassificationOverride) as any ; },
    }
}
