import {ClearPresencePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClearPresencePostRequestBody(writer: SerializationWriter, clearPresencePostRequestBody: ClearPresencePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("sessionId", clearPresencePostRequestBody.sessionId);
}
