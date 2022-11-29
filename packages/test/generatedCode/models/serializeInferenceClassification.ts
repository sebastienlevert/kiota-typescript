import {Entity} from './entity';
import {InferenceClassification, InferenceClassificationOverride} from './index';
import {InferenceClassificationOverride} from './inferenceClassificationOverride';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInferenceClassification(writer: SerializationWriter, inferenceClassification: InferenceClassification | undefined = {}) : void {
        serializeEntityInterface(inferenceClassification)
            writer.writeCollectionOfObjectValues<InferenceClassificationOverride>("overrides", inferenceClassification.overrides);
}
