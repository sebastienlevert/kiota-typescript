import {Entity} from './entity';
import {InferenceClassification, InferenceClassificationOverride} from './index';
import {InferenceClassificationOverride} from './inferenceClassificationOverride';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInferenceClassification(inferenceClassification: InferenceClassification | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntityInterface(inferenceClassification),
        "overrides": n => { InferenceClassification.overrides = n.getCollectionOfObjectValuesFromMethod<InferenceClassificationOverride>(deserializeIntoInferenceClassificationOverride); },
    }
}
