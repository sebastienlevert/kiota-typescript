import {InferenceData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInferenceData(writer: SerializationWriter, inferenceData: InferenceData | undefined = {}) : void {
            writer.writeNumberValue("confidenceScore", inferenceData.confidenceScore);
            writer.writeBooleanValue("userHasVerifiedAccuracy", inferenceData.userHasVerifiedAccuracy);
}
