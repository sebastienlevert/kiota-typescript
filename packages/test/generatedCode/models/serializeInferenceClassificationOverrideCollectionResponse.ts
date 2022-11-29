import {InferenceClassificationOverride, InferenceClassificationOverrideCollectionResponse} from './index';
import {InferenceClassificationOverride} from './inferenceClassificationOverride';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInferenceClassificationOverrideCollectionResponse(writer: SerializationWriter, inferenceClassificationOverrideCollectionResponse: InferenceClassificationOverrideCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", inferenceClassificationOverrideCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValues<InferenceClassificationOverride>("value", inferenceClassificationOverrideCollectionResponse.value);
}
