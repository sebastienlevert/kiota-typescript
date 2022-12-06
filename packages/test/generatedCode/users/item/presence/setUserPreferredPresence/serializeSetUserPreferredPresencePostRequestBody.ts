import {SetUserPreferredPresencePostRequestBody} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetUserPreferredPresencePostRequestBody(writer: SerializationWriter, setUserPreferredPresencePostRequestBody: SetUserPreferredPresencePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("activity", setUserPreferredPresencePostRequestBody.activity);
            writer.writeStringValue("availability", setUserPreferredPresencePostRequestBody.availability);
            writer.writeDurationValue("expirationDuration", setUserPreferredPresencePostRequestBody.expirationDuration);
}
