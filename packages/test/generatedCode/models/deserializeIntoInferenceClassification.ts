import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoInferenceClassificationOverride} from './deserializeIntoInferenceClassificationOverride';
import {InferenceClassification} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInferenceClassification(inferenceClassification: InferenceClassification | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(inferenceClassification),
        "overrides": n => { inferenceClassification.overrides = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInferenceClassificationOverride) as any ; },
    }
}
