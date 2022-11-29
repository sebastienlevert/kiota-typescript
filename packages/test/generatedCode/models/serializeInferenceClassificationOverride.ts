import {EmailAddress} from './emailAddress';
import {Entity} from './entity';
import {EmailAddress, InferenceClassificationOverride} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInferenceClassificationOverride(writer: SerializationWriter, inferenceClassificationOverride: InferenceClassificationOverride | undefined = {}) : void {
        serializeEntityInterface(inferenceClassificationOverride)
            writer.writeEnumValue<InferenceClassificationType>("classifyAs", inferenceClassificationOverride.classifyAs);
            writer.writeObjectValue<EmailAddress>("senderEmailAddress", inferenceClassificationOverride.senderEmailAddress);
}
