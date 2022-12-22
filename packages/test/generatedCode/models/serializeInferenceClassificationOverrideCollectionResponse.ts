import {InferenceClassificationOverrideCollectionResponse} from './index';
import {serializeInferenceClassificationOverride} from './serializeInferenceClassificationOverride';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInferenceClassificationOverrideCollectionResponse(writer: SerializationWriter, inferenceClassificationOverrideCollectionResponse: InferenceClassificationOverrideCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", inferenceClassificationOverrideCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValues("value", inferenceClassificationOverrideCollectionResponse.value as any, serializeInferenceClassificationOverride);
}
