import {SetPresencePostRequestBody} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetPresencePostRequestBody(setPresencePostRequestBody: SetPresencePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activity": n => { setPresencePostRequestBody.activity = n.getStringValue() as any ; },
        "availability": n => { setPresencePostRequestBody.availability = n.getStringValue() as any ; },
        "expirationDuration": n => { setPresencePostRequestBody.expirationDuration = n.getDurationValue() as any ; },
        "sessionId": n => { setPresencePostRequestBody.sessionId = n.getStringValue() as any ; },
    }
}
