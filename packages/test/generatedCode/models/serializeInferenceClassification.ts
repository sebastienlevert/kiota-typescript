import {InferenceClassification} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeInferenceClassificationOverride} from './serializeInferenceClassificationOverride';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInferenceClassification(writer: SerializationWriter, inferenceClassification: InferenceClassification | undefined = {}) : void {
        serializeEntity(writer, inferenceClassification)
            writer.writeCollectionOfObjectValuesFromMethod("overrides", inferenceClassification.overrides as any, serializeInferenceClassificationOverride);
}
