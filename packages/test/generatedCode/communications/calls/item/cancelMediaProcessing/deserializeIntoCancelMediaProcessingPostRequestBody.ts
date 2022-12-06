import {CancelMediaProcessingPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCancelMediaProcessingPostRequestBody(cancelMediaProcessingPostRequestBody: CancelMediaProcessingPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { cancelMediaProcessingPostRequestBody.clientContext = n.getStringValue() as any ; },
    }
}
