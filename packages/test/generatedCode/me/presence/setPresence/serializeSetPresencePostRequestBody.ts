import {SetPresencePostRequestBody} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetPresencePostRequestBody(writer: SerializationWriter, setPresencePostRequestBody: SetPresencePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("activity", setPresencePostRequestBody.activity);
            writer.writeStringValue("availability", setPresencePostRequestBody.availability);
            writer.writeDurationValue("expirationDuration", setPresencePostRequestBody.expirationDuration);
            writer.writeStringValue("sessionId", setPresencePostRequestBody.sessionId);
}
