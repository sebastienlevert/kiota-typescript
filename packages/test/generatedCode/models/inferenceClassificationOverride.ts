import {EmailAddress, Entity} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InferenceClassificationOverride extends Entity, Partial<Parsable> {
    /** Specifies how incoming messages from a specific sender should always be classified as. The possible values are: focused, other. */
    classifyAs?: InferenceClassificationType;
    /** The email address information of the sender for whom the override is created. */
    senderEmailAddress?: EmailAddress;
}
