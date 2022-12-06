import {CopyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyPostRequestBody(copyPostRequestBody: CopyPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "destinationId": n => { copyPostRequestBody.destinationId = n.getStringValue() as any ; },
    }
}
