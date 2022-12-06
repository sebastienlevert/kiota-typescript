import {RemoveKeyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveKeyPostRequestBody(removeKeyPostRequestBody: RemoveKeyPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "keyId": n => { removeKeyPostRequestBody.keyId = n.getStringValue() as any ; },
        "proof": n => { removeKeyPostRequestBody.proof = n.getStringValue() as any ; },
    }
}
