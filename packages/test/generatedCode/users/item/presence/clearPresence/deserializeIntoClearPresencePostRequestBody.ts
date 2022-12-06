import {ClearPresencePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClearPresencePostRequestBody(clearPresencePostRequestBody: ClearPresencePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "sessionId": n => { clearPresencePostRequestBody.sessionId = n.getStringValue() as any ; },
    }
}
