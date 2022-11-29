import {InferenceClassificationOverride, InferenceClassificationOverrideCollectionResponse} from './index';
import {InferenceClassificationOverride} from './inferenceClassificationOverride';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInferenceClassificationOverrideCollectionResponse(inferenceClassificationOverrideCollectionResponse: InferenceClassificationOverrideCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { InferenceClassificationOverrideCollectionResponse.odataNextLink = n.getStringValue(); },
        "value": n => { InferenceClassificationOverrideCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod<InferenceClassificationOverride>(deserializeIntoInferenceClassificationOverride); },
    }
}
