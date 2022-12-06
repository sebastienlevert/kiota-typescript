import {CancelPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCancelPostRequestBody(cancelPostRequestBody: CancelPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { cancelPostRequestBody.comment = n.getStringValue() as any ; },
    }
}
