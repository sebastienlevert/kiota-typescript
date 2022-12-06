import {RemovePasswordPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemovePasswordPostRequestBody(removePasswordPostRequestBody: RemovePasswordPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "keyId": n => { removePasswordPostRequestBody.keyId = n.getStringValue() as any ; },
    }
}
