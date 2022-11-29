import {EmailAddress} from './emailAddress';
import {Entity} from './entity';
import {EmailAddress, InferenceClassificationOverride} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInferenceClassificationOverride(inferenceClassificationOverride: InferenceClassificationOverride | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntityInterface(inferenceClassificationOverride),
        "classifyAs": n => { InferenceClassificationOverride.classifyAs = n.getEnumValue<InferenceClassificationType>(InferenceClassificationType); },
        "senderEmailAddress": n => { InferenceClassificationOverride.senderEmailAddress = n.deserializeIntoEmailAddressInterface(); },
    }
}
