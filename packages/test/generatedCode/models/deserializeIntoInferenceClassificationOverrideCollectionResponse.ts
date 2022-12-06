import {deserializeIntoInferenceClassificationOverride} from './deserializeIntoInferenceClassificationOverride';
import {InferenceClassificationOverrideCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInferenceClassificationOverrideCollectionResponse(inferenceClassificationOverrideCollectionResponse: InferenceClassificationOverrideCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { inferenceClassificationOverrideCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { inferenceClassificationOverrideCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInferenceClassificationOverride) as any ; },
    }
}
