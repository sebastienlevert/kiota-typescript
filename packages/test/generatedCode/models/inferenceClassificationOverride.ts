import {EmailAddress, Entity} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InferenceClassificationOverride extends Entity, Partial<Parsable> {
    /** The classifyAs property */
    classifyAs?: InferenceClassificationType;
    /** The senderEmailAddress property */
    senderEmailAddress?: EmailAddress;
}