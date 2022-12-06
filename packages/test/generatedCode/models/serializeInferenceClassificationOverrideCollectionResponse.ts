import {InferenceClassificationOverrideCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeInferenceClassificationOverride} from './serializeInferenceClassificationOverride';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInferenceClassificationOverrideCollectionResponse(writer: SerializationWriter, inferenceClassificationOverrideCollectionResponse: InferenceClassificationOverrideCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, inferenceClassificationOverrideCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", inferenceClassificationOverrideCollectionResponse.value as any, serializeInferenceClassificationOverride);
}
