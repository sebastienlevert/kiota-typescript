import {deserializeIntoEmailAddress} from './deserializeIntoEmailAddress';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {InferenceClassificationOverride} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInferenceClassificationOverride(inferenceClassificationOverride: InferenceClassificationOverride | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(inferenceClassificationOverride),
        "classifyAs": n => { inferenceClassificationOverride.classifyAs = n.getEnumValue<InferenceClassificationType>(InferenceClassificationType) as any ; },
        "senderEmailAddress": n => { inferenceClassificationOverride.senderEmailAddress = n.getObjectValue(deserializeIntoEmailAddress) as any ; },
    }
}
