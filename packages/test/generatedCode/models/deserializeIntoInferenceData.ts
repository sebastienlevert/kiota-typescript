import {InferenceData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInferenceData(inferenceData: InferenceData | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "confidenceScore": n => { inferenceData.confidenceScore = n.getNumberValue() as any ; },
        "userHasVerifiedAccuracy": n => { inferenceData.userHasVerifiedAccuracy = n.getBooleanValue() as any ; },
    }
}
