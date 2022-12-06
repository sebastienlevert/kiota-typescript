import {UnmutePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnmutePostRequestBody(unmutePostRequestBody: UnmutePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { unmutePostRequestBody.clientContext = n.getStringValue() as any ; },
    }
}
