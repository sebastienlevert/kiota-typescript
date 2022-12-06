import {MutePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMutePostRequestBody(writer: SerializationWriter, mutePostRequestBody: MutePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("clientContext", mutePostRequestBody.clientContext);
}
