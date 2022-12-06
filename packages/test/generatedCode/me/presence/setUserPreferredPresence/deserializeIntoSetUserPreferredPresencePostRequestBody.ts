import {SetUserPreferredPresencePostRequestBody} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetUserPreferredPresencePostRequestBody(setUserPreferredPresencePostRequestBody: SetUserPreferredPresencePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activity": n => { setUserPreferredPresencePostRequestBody.activity = n.getStringValue() as any ; },
        "availability": n => { setUserPreferredPresencePostRequestBody.availability = n.getStringValue() as any ; },
        "expirationDuration": n => { setUserPreferredPresencePostRequestBody.expirationDuration = n.getDurationValue() as any ; },
    }
}
